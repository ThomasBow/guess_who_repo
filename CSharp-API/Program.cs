using Microsoft.EntityFrameworkCore;
using GuessWho.Hubs;

var builder = WebApplication.CreateBuilder(args);

ConfigurationManager configuration = builder.Configuration;

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
    policy =>
        policy.WithOrigins("http://localhost:3000", "http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod()
    );
});

builder.Services.AddControllers();

builder.Services.AddSingleton<SpotifyService>();
builder.Services.AddScoped<DatabaseService>();
builder.Services.AddScoped<UserService>();
builder.Services.AddDbContext<ApplicationDatabaseContext>(options =>
    options.UseSqlite(configuration.GetConnectionString("DefaultConnection"))
);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddSignalR();

string clientId = configuration["MySettings:CLIENT_ID"] ?? throw new Exception("CLIENT_ID not found in configuration");
string clientSecret = configuration["MySettings:CLIENT_SECRET"] ?? throw new Exception("CLIENT_SECRET not found in configuration");

builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddFilter("Microsoft.EntityFrameworkCore.Database.Command", LogLevel.Warning);

var app = builder.Build();

app.UseCors("AllowReactApp");
app.MapControllers();

app.MapHub<GameHub>("/gamehub");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.Run();
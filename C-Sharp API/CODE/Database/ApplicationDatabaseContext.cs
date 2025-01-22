


using Microsoft.EntityFrameworkCore;

public class ApplicationDatabaseContext : DbContext
{
    public ApplicationDatabaseContext(DbContextOptions<ApplicationDatabaseContext> options) : base(options)
    {

    }

    public DbSet<User> Users { get; set; }
}
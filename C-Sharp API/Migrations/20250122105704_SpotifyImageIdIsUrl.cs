using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CSharp_API.Migrations
{
    /// <inheritdoc />
    public partial class SpotifyImageIdIsUrl : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Url",
                table: "SpotifyImage");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Url",
                table: "SpotifyImage",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}

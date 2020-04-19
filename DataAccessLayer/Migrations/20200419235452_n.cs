using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccessLayer.Migrations
{
    public partial class n : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            
            migrationBuilder.CreateTable(
                name: "Cart",
                columns: table => new
                {
                    Key = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<int>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    price = table.Column<int>(nullable: false),
                    DeliveryTime = table.Column<int>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: true),
                    IsWishlist = table.Column<bool>(nullable: false),
                    ProductDTOKey = table.Column<int>(nullable: true),
                    UserDTOKey = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cart", x => x.Key);
                    table.ForeignKey(
                        name: "FK_Cart_Products_ProductDTOKey",
                        column: x => x.ProductDTOKey,
                        principalTable: "Products",
                        principalColumn: "Key",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Cart_Users_UserDTOKey",
                        column: x => x.UserDTOKey,
                        principalTable: "Users",
                        principalColumn: "Key",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cart_ProductDTOKey",
                table: "Cart",
                column: "ProductDTOKey");

            migrationBuilder.CreateIndex(
                name: "IX_Cart_UserDTOKey",
                table: "Cart",
                column: "UserDTOKey");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cart");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}

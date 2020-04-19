using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccessLayer.Migrations
{
    public partial class a : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cart_Products_ProductId",
                table: "Cart");

            migrationBuilder.DropForeignKey(
                name: "FK_Cart_Users_UserId",
                table: "Cart");

            migrationBuilder.DropIndex(
                name: "IX_Cart_ProductId",
                table: "Cart");

            migrationBuilder.DropIndex(
                name: "IX_Cart_UserId",
                table: "Cart");

            migrationBuilder.AddColumn<int>(
                name: "ProductDTOKey",
                table: "Cart",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserDTOKey",
                table: "Cart",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cart_ProductDTOKey",
                table: "Cart",
                column: "ProductDTOKey");

            migrationBuilder.CreateIndex(
                name: "IX_Cart_UserDTOKey",
                table: "Cart",
                column: "UserDTOKey");

            migrationBuilder.AddForeignKey(
                name: "FK_Cart_Products_ProductDTOKey",
                table: "Cart",
                column: "ProductDTOKey",
                principalTable: "Products",
                principalColumn: "Key",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Cart_Users_UserDTOKey",
                table: "Cart",
                column: "UserDTOKey",
                principalTable: "Users",
                principalColumn: "Key",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cart_Products_ProductDTOKey",
                table: "Cart");

            migrationBuilder.DropForeignKey(
                name: "FK_Cart_Users_UserDTOKey",
                table: "Cart");

            migrationBuilder.DropIndex(
                name: "IX_Cart_ProductDTOKey",
                table: "Cart");

            migrationBuilder.DropIndex(
                name: "IX_Cart_UserDTOKey",
                table: "Cart");

            migrationBuilder.DropColumn(
                name: "ProductDTOKey",
                table: "Cart");

            migrationBuilder.DropColumn(
                name: "UserDTOKey",
                table: "Cart");

            migrationBuilder.CreateIndex(
                name: "IX_Cart_ProductId",
                table: "Cart",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Cart_UserId",
                table: "Cart",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cart_Products_ProductId",
                table: "Cart",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Key",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Cart_Users_UserId",
                table: "Cart",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Key",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using SharedLayer.DTO;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessLayer.DBContext
{
    public class InventoryDbContext : DbContext
    {

        public DbSet<ProductDTO> Products { get; set; }
        public DbSet<UserDTO> Users { get; set; }
        public DbSet<CartDTO> Cart { get; set; }

        public InventoryDbContext(DbContextOptions<InventoryDbContext> options) : base(options)
        {
            LoadDefault();
        }

        public List<ProductDTO> getProducts() => Products.Local.ToList<ProductDTO>();
        public List<UserDTO> getUsers() => Users.Local.ToList<UserDTO>();
        public List<CartDTO> getCart() => Cart.Local.ToList<CartDTO>();
        public List<ProductDTO> addProducts(List<ProductDTO> products)
        {
            products.ForEach(product => Products.Add(product));
            return products;
        }

        private void LoadDefault()
        {
            Products.Add(new ProductDTO { Name = "Tom" });
            Products.Add(new ProductDTO { Name = "Arthur" });

            Users.Add(new UserDTO { Name = "Tom" });
            Users.Add(new UserDTO { Name = "Arthur" });
        }
    }
}

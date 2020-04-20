using DataAccessLayer.DBContext;
using Microsoft.EntityFrameworkCore;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using SharedLayer.Infra;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class ProductDL : IProductDL
    {


        public ProductDL(InventoryDbContext productDbContext)
        {
            this.productDbContext = productDbContext;
        }

        public ProductDL()
        {
        }

        public InventoryDbContext productDbContext { get; private set; }

        public IList<ProductDTO> GetProducts()
        {
            return productDbContext.Products.ToList<ProductDTO>();
        }

        public IList<ProductDTO> GetOrders(int userID)
        {
            return productDbContext.Products.ToList<ProductDTO>();
        }

        public  ProductDTO GetProduct(int id)
        {
            var productDTO =  productDbContext.Products.Find(id);

            if (productDTO == null)
            {
                return null;
            }

            return productDTO;
        }

        public bool updateProducts(List<ProductDTO> items)
        {
            productDbContext.Products.UpdateRange(items);
            productDbContext.SaveChanges();
            return true;
        }


    }
}

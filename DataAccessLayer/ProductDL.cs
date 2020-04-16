using DataAccessLayer.DBContext;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using SharedLayer.Infra;
using System;
using System.Collections.Generic;

namespace DataAccessLayer
{
    public class ProductDL : IProductDL
    {

        public ProductDL(InventoryDbContext productDbContext)
        {
            this.productDbContext = productDbContext;
        }

        public InventoryDbContext productDbContext { get; private set; }

        public IList<ProductDTO> GetProducts()
        {

            List<ProductDTO> products = new List<ProductDTO>()
            {
                new ProductDTO { Name = "Tom" }

            };
            OperationResult<List<ProductDTO>> result = new OperationResult<List<ProductDTO>> { Result = products, ErrorMessage = null, StatusCode = "500" };
             productDbContext.addProducts(products);
            var aa = productDbContext.getProducts();
            return aa;
        }
    }
}

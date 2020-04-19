using DataAccessLayer;
using SharedLayer.BusinessContracts;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using System.Collections.Generic;

namespace BusinessLayer
{
    public class ProductBL : IProductBL
    {

        public ProductBL(IProductDL productDL)
        {
            this.productDL = productDL;
        }

        public IProductDL productDL { get; private set; }

        public ProductDTO GetProduct(int id)
        {
            return this.productDL.GetProduct(id);
        }

        public IList<ProductDTO> GetOrders(int userID)
        {
            return this.productDL.GetOrders(userID);
        }

        public IList<ProductDTO> GetProducts()
        {
            return this.productDL.GetProducts();
        }

    }
}

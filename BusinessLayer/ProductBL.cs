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

        public IList<ProductDTO> GetProducts()
        {
            productDL.GetProducts();
            return null;
        }

    }
}

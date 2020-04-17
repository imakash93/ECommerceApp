using SharedLayer.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedLayer.DataContracts
{
   public interface IProductDL
    {
        IList<ProductDTO> GetProducts();
        ProductDTO GetProduct(int id);
    }
}

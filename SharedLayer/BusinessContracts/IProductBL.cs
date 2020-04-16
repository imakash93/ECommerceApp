using SharedLayer.DTO;
using System.Collections.Generic;

namespace SharedLayer.BusinessContracts
{
    public interface IProductBL
    {
        IList<ProductDTO> GetProducts();

    }
}

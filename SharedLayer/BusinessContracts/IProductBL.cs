using SharedLayer.DTO;
using System.Collections.Generic;

namespace SharedLayer.BusinessContracts
{
    public interface IProductBL
    {
        IList<ProductDTO> GetOrders(int userID);
        IList<ProductDTO> GetProducts();
        ProductDTO GetProduct(int id);

        bool updateProducts(List<CartDTO> items);


    }
}

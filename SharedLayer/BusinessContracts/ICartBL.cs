using SharedLayer.DTO;
using System.Collections.Generic;

namespace SharedLayer.BusinessContracts
{
    public interface ICartBL
    {
        IList<CartDTO> GetCart(int userID,bool isWishList);
        bool SaveCart(CartDTO items);
        bool RemoveCartItems(CartDTO item);
        bool DelCartItems(CartDTO item);
        bool DeleteCartDTOs(List<CartDTO> items);

    }
}

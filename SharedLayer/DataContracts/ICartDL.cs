using SharedLayer.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedLayer.DataContracts
{
   public interface ICartDL
    {
        IList<CartDTO> GetCart();
        bool RemoveCartItem(CartDTO item);

        bool DelCartItems(CartDTO item);

        bool AddToCart(CartDTO items);
    }
}

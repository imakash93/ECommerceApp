using DataAccessLayer;
using SharedLayer.BusinessContracts;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using System.Collections.Generic;

namespace BusinessLayer
{
    public class CartBL : ICartBL
    {

        public ICartDL cartDL { get; private set; }

        public CartBL(ICartDL cartDL)
        {
            this.cartDL = cartDL;
        }

        public IList<CartDTO> GetCart()
        {
            cartDL.GetCart();
            return null;
        }

        public bool RemoveCartItems(CartDTO item)
        {
            this.cartDL.RemoveCartItem(item);
            return true;
        }

        public bool SaveCart(IList<CartDTO> items)
        {
            cartDL.AddToCart(items);
            return true;
        }
    }
}

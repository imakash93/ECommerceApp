using DataAccessLayer;
using SharedLayer.BusinessContracts;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using System.Collections.Generic;
using System.Linq;

namespace BusinessLayer
{
    public class CartBL : ICartBL
    {

        public ICartDL cartDL { get; private set; }

        public CartBL(ICartDL cartDL)
        {
            this.cartDL = cartDL;
        }

        public IList<CartDTO> GetCart(int userID, bool isWishList)
        {
           
           var products= cartDL.GetCart();
           var result= products.Where(s => s.UserId == userID && s.IsWishlist == isWishList)
                              .Select(s => s);
            return result.ToList();
        }

        public bool RemoveCartItems(CartDTO item)
        {
            this.cartDL.RemoveCartItem(item);
            return true;
        }

        public bool SaveCart(CartDTO items)
        {
            cartDL.AddToCart(items);
            return true;
        }

        public bool DelCartItems(CartDTO item)
        {
            return cartDL.DelCartItems(item);
        }
    }
}

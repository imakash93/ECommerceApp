using DataAccessLayer;
using SharedLayer.BusinessContracts;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using System.Collections.Generic;

namespace BusinessLayer
{
    public class CartBL : ICartBL
    {

        public CartBL(ICartDL cartDL)
        {
            this.cartDL = cartDL;
        }

        public ICartDL cartDL { get; private set; }

        public IList<CartDTO> GetCart()
        {
            cartDL.GetCart();
            return null;
        }

    }
}

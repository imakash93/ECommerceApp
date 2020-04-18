﻿using SharedLayer.DTO;
using System.Collections.Generic;

namespace SharedLayer.BusinessContracts
{
    public interface ICartBL
    {
        IList<CartDTO> GetCart();
        bool SaveCart(IList<CartDTO> items);
        bool RemoveCartItems(IList<CartDTO> item);
    }
}

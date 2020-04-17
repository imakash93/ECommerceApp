using DataAccessLayer.DBContext;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using SharedLayer.Infra;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessLayer
{
    public class CartDL : ICartDL
    {

        private readonly InventoryDbContext _context;

        public CartDL(InventoryDbContext context)
        {
            _context = context;
        }


        public InventoryDbContext inventory { get; private set; }

        public IList<CartDTO> GetCart()
        {

            return  _context.Cart.ToList<CartDTO>();

        }
    }
}

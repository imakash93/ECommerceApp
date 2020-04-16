using DataAccessLayer.DBContext;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using SharedLayer.Infra;
using System;
using System.Collections.Generic;

namespace DataAccessLayer
{
    public class CartDL : ICartDL
    {

        public CartDL(InventoryDbContext inventoryDbContext)
        {
            this.inventory = inventoryDbContext;
        }

        public InventoryDbContext inventory { get; private set; }

        public IList<CartDTO> GetCart()
        {

            List<CartDTO> products = new List<CartDTO>()
            {
                new CartDTO { ProductId = 1 }

            };
            //OperationResult<List<UserDTO>> result = new OperationResult<UserDTO> { Result = products, ErrorMessage = null, StatusCode = "500" };
            // productDbContext.ad(products);
            var aa = inventory.getCart();
            return aa;
        }
    }
}

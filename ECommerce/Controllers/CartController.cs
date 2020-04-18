using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.DBContext;
using SharedLayer.DTO;
using BusinessLayer;
using SharedLayer.BusinessContracts;

namespace ECommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        public ICartBL cartBL { get; set; }

        public CartController(ICartBL cartBL)
        {
            this.cartBL = cartBL;
        }


        [HttpGet("GetCart")]
        public IList<CartDTO> GetCart(int userID)
        {
            return  cartBL.GetCart();
        }
    
        [HttpPost]
        public List<CartDTO> PostCartDTO(List<CartDTO> cartDTOs)
        {
            this.cartBL.SaveCart(cartDTOs);

            return cartDTOs;
        }

        // DELETE: api/CartDTOes/5
        [HttpDelete("{id}")]
        public IList<CartDTO> DeleteCartDTO(IList<CartDTO> item)
        {
            this.cartBL.RemoveCartItems(item);
            return item;
        }


    }
}

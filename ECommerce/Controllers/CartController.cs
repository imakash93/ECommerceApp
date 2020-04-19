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
        public IList<CartDTO> GetCart(int userID,bool isWishList)
        {
            return  cartBL.GetCart(userID,isWishList);
        }
    
        [HttpPut("PostCartDTO")]
        public CartDTO PostCartDTO(CartDTO item)
        {
            this.cartBL.SaveCart(item);
            return item;
        }

        [HttpPut("RemoveFromCart")]
        public bool RemoveFromCart(CartDTO item)
        {
            this.cartBL.RemoveCartItems(item);
            return true;
        }
        
        // DELETE: api/CartDTOes/5
        [HttpPut("DeleteCartDTO")]
        public CartDTO DeleteCartDTO(CartDTO item)
        {
            this.cartBL.DelCartItems(item);
            return item;
        }


    }
}

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

namespace ECommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartDTOesController : ControllerBase
    {
        public CartBL cartBL { get; set; }

        public CartDTOesController(CartBL cartBL)
        {
            this.cartBL = cartBL;
        }


        [HttpGet]
        public IList<CartDTO> GetCart()
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
        public CartDTO DeleteCartDTO(CartDTO item)
        {
            this.cartBL.RemoveCartItems(item);
            return item;
        }

    }
}

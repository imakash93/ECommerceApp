using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.DBContext;
using SharedLayer.DTO;

namespace ECommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartDTOesController : ControllerBase
    {
        private readonly InventoryDbContext _context;

        public CartDTOesController(InventoryDbContext context)
        {
            _context = context;
        }

        // GET: api/CartDTOes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CartDTO>>> GetCart()
        {
            return await _context.Cart.ToListAsync();
        }

        // POST: api/CartDTOes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<CartDTO>> PostCartDTO(CartDTO cartDTO)
        {
            _context.Cart.Add(cartDTO);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCartDTO", new { id = cartDTO.Key }, cartDTO);
        }

        // DELETE: api/CartDTOes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CartDTO>> DeleteCartDTO(int id)
        {
            var cartDTO = await _context.Cart.FindAsync(id);
            if (cartDTO == null)
            {
                return NotFound();
            }

            _context.Cart.Remove(cartDTO);
            await _context.SaveChangesAsync();

            return cartDTO;
        }

    }
}

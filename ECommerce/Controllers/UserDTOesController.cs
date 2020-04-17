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
    public class UserDTOesController : ControllerBase
    {
        private readonly InventoryDbContext _context;

        public UserDTOesController(InventoryDbContext context)
        {
            _context = context;
        }

        // GET: api/UserDTOes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/UserDTOes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDTO>> GetUserDTO(int id)
        {
            var userDTO = await _context.Users.FindAsync(id);

            if (userDTO == null)
            {
                return NotFound();
            }

            return userDTO;
        }

        // PUT: api/UserDTOes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserDTO(int id, UserDTO userDTO)
        {
            if (id != userDTO.Key)
            {
                return BadRequest();
            }

            _context.Entry(userDTO).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDTOExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserDTOes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<UserDTO>> PostUserDTO(UserDTO userDTO)
        {
            _context.Users.Add(userDTO);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserDTO", new { id = userDTO.Key }, userDTO);
        }

        // DELETE: api/UserDTOes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserDTO>> DeleteUserDTO(int id)
        {
            var userDTO = await _context.Users.FindAsync(id);
            if (userDTO == null)
            {
                return NotFound();
            }

            _context.Users.Remove(userDTO);
            await _context.SaveChangesAsync();

            return userDTO;
        }

        private bool UserDTOExists(int id)
        {
            return _context.Users.Any(e => e.Key == id);
        }
    }
}

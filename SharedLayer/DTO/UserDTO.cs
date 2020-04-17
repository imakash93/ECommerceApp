using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SharedLayer.DTO
{
    public class UserDTO
    {
        [Key]
        public int Key { get; set; }

        public string Name { get; set; }

        public long Phone { get; set; }

        public int Sex { get; set; }

        public string Address { get; set; }

        public bool IsActive { get; set; }

        public string Password { get; set; }

        public string Email { get; set; }

        public ICollection<CartDTO> Carts { get; set; }
    }
}

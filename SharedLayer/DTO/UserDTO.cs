using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SharedLayer.DTO
{
    public class UserDTO
    {
        [Key]
        public int Key { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }

        public int Sex { get; set; }

        public string Address { get; set; }

        public bool IsActive { get; set; }

        public ICollection<CartDTO> Carts { get; set; }
}
}

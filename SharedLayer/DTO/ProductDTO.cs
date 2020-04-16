using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SharedLayer.DTO
{
    public class ProductDTO
    {
        [Key]
        public int Key { get; set; }
        public string Name { get; set; }

        public string Quantity { get; set; }

        public string Price { get; set; }

        public int Type { get; set; }

        public string ImageUrl { get; set; }

        public  bool IsActive { get; set; }

        public ICollection<CartDTO> Carts { get; set; }
    }
}

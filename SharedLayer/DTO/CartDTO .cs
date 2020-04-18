using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SharedLayer.DTO
{
    public class CartDTO
    {
        [Key]
        public int Key { get; set; }

        // Foreign Key for Product
        public int ProductId { get; set; }

        public ProductDTO Product { get; set; }

        public int Quantity { get; set; }
        // Foreign Key for User

        public int UserId { get; set; }

        public UserDTO User { get; set; }

        public bool IsWishlist { get; set; }
    }
}

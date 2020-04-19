using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SharedLayer.DTO
{
    public class CartDTO
    {
        private string imageUrl = "images/cartImage.png";
        private int key;
        public CartDTO()
        {

        }
        [Key]
        public int Key
        {
            get
            {
                return key;
            }
            set
            {
                if (value != key)
                {
                    key = value;
                }
            }
        }

        // Foreign Key for Product
        public int ProductId { get; set; }

        public int Quantity { get; set; }
        // Foreign Key for User

        public int UserId { get; set; }

        public int price { get; set; }
        public int DeliveryTime { get; set; }

        public string ImageUrl
        {
            get
            {
                return imageUrl;
            }
            set
            {
                if (value != null)
                {
                    imageUrl = value;
                }
            }
        }


        public bool IsWishlist { get; set; }
    }
}

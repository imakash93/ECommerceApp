﻿using DataAccessLayer;
using SharedLayer.BusinessContracts;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using System.Collections.Generic;

namespace BusinessLayer
{
    public class ProductBL : IProductBL
    {

        public ProductBL(IProductDL productDL)
        {
            this.productDL = productDL;
        }

        public IProductDL productDL { get; private set; }

        public ProductDTO GetProduct(int id)
        {
            return this.productDL.GetProduct(id);
        }

        public IList<ProductDTO> GetOrders(int userID)
        {
            return this.productDL.GetOrders(userID);
        }

        public IList<ProductDTO> GetProducts()
        {
            return this.productDL.GetProducts();
        }

        public bool updateProducts(List<CartDTO> items)
        {
            var products =  this.productDL.GetProducts();
            var result = true;

            List<ProductDTO> updatedProducts = new List<ProductDTO>();

            foreach (CartDTO cart in items) 
            {
                foreach (ProductDTO product in products)  
                {
                    if(product.Key == cart.ProductId)
                    {
                        var updatedQuantity = System.Int32.Parse(product.Quantity) - cart.Quantity;
                        if (cart.Quantity > 0 && updatedQuantity >= 0)
                        {
                            product.Quantity = updatedQuantity.ToString();
                            updatedProducts.Add(product);
                        }
                        else {
                            result = false;
                        }
                    }
                }
            }

            if (result)
            {
                this.productDL.updateProducts(updatedProducts);
            }

            return result;
        }
    }
}

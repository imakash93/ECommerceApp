using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SharedLayer.DTO;
using SharedLayer.BusinessContracts;

namespace ECommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public IProductBL productBL { get; private set; }

        public ProductsController( IProductBL productBL)
        {
            this.productBL = productBL;
        }

        // GET: api/Products
        [HttpGet("GetProducts")]
        public  IList<ProductDTO> GetProducts()
        {
            return productBL.GetProducts();

        }

        [HttpGet("GetOrders")]
        public IList<ProductDTO> GetOrders(int userID)
        {
            return productBL.GetOrders(userID);

        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public ProductDTO GetProductDTO(int id)
        {
            return productBL.GetProduct(id);
        }

        [HttpPut("updateProducts")]
        public bool updateProducts(List<CartDTO> items)
        {
            return this.productBL.updateProducts(items);
            
        }

    }
}

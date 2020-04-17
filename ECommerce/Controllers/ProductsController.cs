﻿using System.Collections.Generic;
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
        [HttpGet]
        public  IList<ProductDTO> GetProducts()
        {
            return productBL.GetProducts();

        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public ProductDTO GetProductDTO(int id)
        {
            return productBL.GetProduct(id);
        }

    }
}
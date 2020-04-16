using DataAccessLayer.DBContext;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using SharedLayer.Infra;
using System;
using System.Collections.Generic;

namespace DataAccessLayer
{
    public class UserDL : IUserDL
    {

        public UserDL(InventoryDbContext productDbContext)
        {
            this.productDbContext = productDbContext;
        }

        public InventoryDbContext productDbContext { get; private set; }

        public IList<UserDTO> GetUsers()
        {

            List<UserDTO> products = new List<UserDTO>()
            {
                new UserDTO { Name = "Tom" }

            };
            //OperationResult<List<UserDTO>> result = new OperationResult<UserDTO> { Result = products, ErrorMessage = null, StatusCode = "500" };
            // productDbContext.ad(products);
            var aa = productDbContext.getUsers();
            return aa;
        }
    }
}

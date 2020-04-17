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
        public InventoryDbContext productDbContext { get; private set; }

        public UserDL(InventoryDbContext productDbContext)
        {
            this.productDbContext = productDbContext;
        }

        public UserDTO GetUser(string email)
        {
            var aa = productDbContext.Users.Find(email);
            return aa;
        }

        public bool SaveUSer(UserDTO user)
        {
            throw new NotImplementedException();
        }
    }
}

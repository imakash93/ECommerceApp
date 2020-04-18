using DataAccessLayer.DBContext;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessLayer
{
    public class UserDL : IUserDL
    {
        public InventoryDbContext productDbContext { get; private set; }

        public UserDL(InventoryDbContext productDbContext)
        {
            this.productDbContext = productDbContext;
        }

        public UserDTO GetUser(int id)
        {
            return productDbContext.Users.Find(id);
        }

        public List<UserDTO> GetUsers()
        {
            return productDbContext.Users.ToList<UserDTO>();
        }

        public UserDTO SaveUSer(UserDTO user)
        {
            productDbContext.Users.Add(user);
            productDbContext.SaveChanges();
            return user;
        }

    }
}

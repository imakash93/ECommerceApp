using DataAccessLayer;
using SharedLayer.BusinessContracts;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using System.Collections.Generic;
using System.Linq;

namespace BusinessLayer
{
    public class UserBL : IUserBL
    {
        public IUserDL userDL { get; private set; }

        public UserBL(IUserDL userDL)
        {
            this.userDL = userDL;
        }

        public UserDTO GetUser(int id)
        {
            return this.userDL.GetUser(id);
        }

        public bool CheckEmail(string email)
        {
            var users = this.userDL.GetUsers();
            var user = users.Any(e => e.Email == email);
            return user ? true : false;
        }

        public UserDTO SaveUSer(UserDTO user)
        {
            this.userDL.SaveUSer(user);
            return user;
        }

        public List<UserDTO> GetUsers()
        {
            return this.userDL.GetUsers();
        }
    }
}

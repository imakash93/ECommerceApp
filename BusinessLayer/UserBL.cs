using DataAccessLayer;
using SharedLayer.BusinessContracts;
using SharedLayer.DataContracts;
using SharedLayer.DTO;
using System.Collections.Generic;

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
            throw new System.NotImplementedException();
        }

        public UserDTO CheckEmail(string email)
        {
            throw new System.NotImplementedException();
        }

        public IList<UserDTO> GetUsers()
        {
            throw new System.NotImplementedException();
        }
    }
}

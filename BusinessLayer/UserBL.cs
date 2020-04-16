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


        public IList<UserDTO> GetUsers()
        {
            userDL.GetUsers();
            return null;
        }

    }
}

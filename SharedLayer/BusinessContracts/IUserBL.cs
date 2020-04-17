using SharedLayer.DTO;
using System.Collections.Generic;

namespace SharedLayer.BusinessContracts
{
    public interface IUserBL
    {
        IList<UserDTO> GetUsers();

        UserDTO GetUser(int id);

        UserDTO CheckEmail(string email);

    }
}

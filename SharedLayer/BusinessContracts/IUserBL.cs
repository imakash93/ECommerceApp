using SharedLayer.DTO;
using System.Collections.Generic;

namespace SharedLayer.BusinessContracts
{
    public interface IUserBL
    {
        UserDTO GetUser(int id);
        List<UserDTO> GetUsers();

        bool CheckEmail(string email);

        UserDTO SaveUSer(UserDTO user);


    }
}

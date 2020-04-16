using SharedLayer.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedLayer.DataContracts
{
   public interface IUserDL
    {
        IList<UserDTO> GetUsers();
    }
}

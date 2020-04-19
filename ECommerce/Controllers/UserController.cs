using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SharedLayer.DTO;
using BusinessLayer;
using SharedLayer.BusinessContracts;

namespace ECommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IUserBL userBL { get; set; }

        public UserController(IUserBL userBL)
        {
            this.userBL = userBL;
        }

        [HttpGet("GetUserByID")]
        public UserDTO GetUser(int id)
        {
            var userDTO = userBL.GetUser(id);

            if (userDTO == null)
            {
                return null;
            }

            return userDTO;
        }

        [HttpGet("GetUser")]
        public UserDTO GetUser(string email,string pass)
        {
            var userList = userBL.GetUsers();

            var userDTO = userList.Where(s => s.Email == email && s.Password == pass)
                               .Select(s => s);
            if (userDTO.Count() == 0)
            {
               new UserDTO();
            }
            return userDTO.FirstOrDefault();
        }

        [HttpGet("checkEmail")]
        public bool checkEmail(string email)
        {
            var result = userBL.CheckEmail(email);
            return result;
        }


        [HttpPut("PostUser")]
        public ActionResult PostUser(UserDTO userDTO)
        {
            userBL.SaveUSer(userDTO);
            return Ok();

        }
    }
}

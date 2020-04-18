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
        public bool GetUser(string email)
        {
            var userList = userBL.GetUsers();

            var UserDTO = userList.Where(s => s.Email == email)
                               .Select(s => s);

            //if (UserDTO == null)
            //{
            //    return null;
            //}

            return false;
        }

        [HttpGet("checkEmail")]
        public bool checkEmail(string email)
        {
            var userDTO = userBL.CheckEmail(email);
            return userDTO;
        }


        [HttpPut("PostUser")]
        public ActionResult PostUser(UserDTO userDTO)
        {
            userBL.SaveUSer(userDTO);
            return Ok();

        }
    }
}

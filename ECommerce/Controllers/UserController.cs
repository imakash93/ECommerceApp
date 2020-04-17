using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.DBContext;
using SharedLayer.DTO;
using BusinessLayer;

namespace ECommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public UserBL userBL { get; set; }

        public UserController(UserBL userBL)
        {
            this.userBL = userBL;
        }

        [HttpGet("{id}")]
        public UserDTO GetUserDTO(int id)
        {
            var userDTO =  userBL.GetUser(id);

            if (userDTO == null)
            {
                return null;
            }

            return userDTO;
        }

        [HttpGet("{email}")]
        public  bool checkEmail(string email)
        {
            var userDTO = userBL.CheckEmail(email);
            return userDTO;
        }

        [HttpPost]
        public UserDTO PostUserDTO(UserDTO userDTO)
        {
            userBL.SaveUSer(userDTO);
            return userDTO;
        }
    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Auth.Login;

namespace UmaMusumeTrpg.Controllers
{
    [AllowAnonymous]
    [Route("Api/Auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private readonly IAuthService _authService;

        public AuthController(ILogger<AuthController> logger, IAuthService authService)
        {
            _logger = logger;
            _authService = authService;
        }


        [HttpPost, Route("Login")]
        public ActionResult<LoginResponse> Login([Required][FromBody] LoginRequest loginRequest)
        {
            return Ok(new LoginResponse
            {
                LoginItem = _authService.Login(loginRequest.LoginUser)
            });
        }


        [Authorize]
        [HttpPost, Route("TokenUpdate")]
        public ActionResult<LoginResponse> TokenUpdate()
        {
            return Ok(new LoginResponse
            {
                LoginItem = _authService.TokenUpdate(
                    int.Parse(HttpContext.User.Claims.First(x => x.Type.Equals(MyClaimTypes.Id)).Value))
            });
        }

        [Authorize(Policy = "SysAdminPolicy")]
        [HttpPost, Route("isSysPermissionToAdmin")]
        public ActionResult IsSysPermissionToAdmin()
        {
            return Ok(true);
        }

        [Authorize(Policy = "UmaMusumeGmPlayerPolicy")]
        [HttpPost, Route("isUmaMusumeGmPlayer")]
        public ActionResult IsUmaMusumeGmPlayer()
        {
            return Ok(true);
        }

        [Authorize(Policy = "UmaMusumePlayerPolicy")]
        [HttpPost, Route("isUmaMusumePlayer")]
        public ActionResult IsUmaMusumePlayer()
        {
            return Ok(true);
        }
    }
}

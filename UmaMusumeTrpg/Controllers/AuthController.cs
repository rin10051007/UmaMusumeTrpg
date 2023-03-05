using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
        //public ActionResult<LoginResponse> Login([Required][FromBody] LoginUser loginUser)
        public ActionResult<LoginResponse> Login()
        {
            var loginUser = new LoginUser()
            {
                LoginId = "admin",
                Password = "adminPassword",
            };
            return Ok(new LoginResponse
            {
                LoginItem = _authService.Login(loginUser)
            });
        }
    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Auth.Login;
using UmaMusumeTrpg.Models.Settings;

namespace UmaMusumeTrpg.Controllers
{
    [AllowAnonymous]
    [Route("Api/Auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private readonly JwtSettings _jwtSettings;

        public AuthController(ILogger<AuthController> logger, IOptions<JwtSettings> jwtSettings)
        {
            _logger = logger;
            _jwtSettings = jwtSettings.Value;
        }


        [HttpPost, Route("Login")]
        //public ActionResult<LoginResponse> Login([Required][FromBody] LoginUser loginUser)
        public ActionResult<LoginResponse> Login()
        {
            var loginUser = new LoginUser()
            {
                LoginId = "LoginId",
                Passwird = "adminPassword",
            };
            var handler = new JwtSecurityTokenHandler();
            var claims = new[] {
                new Claim(ClaimTypes.Name, loginUser.LoginId),
                new Claim(MyClaimTypes.SysPermission, SysPermission.SysAdmin.ToString()),
                new Claim(MyClaimTypes.UmaMusumeTrpgPermission, UmaMusumeTrpgPermission.GmPlayer.ToString())
            };
            var credentials = new SigningCredentials(
                _jwtSettings.SecurityKey(),
                SecurityAlgorithms.HmacSha512);
            var token = handler.CreateJwtSecurityToken(
                audience: loginUser.LoginId,
                issuer: _jwtSettings.Issuer,
                expires: DateTime.Now.AddSeconds(_jwtSettings.ExpireTime),
                subject: new ClaimsIdentity(claims),
                signingCredentials: credentials);
            var tokenText = handler.WriteToken(token);
            var result = new
            {
                token = tokenText
            };
            return Ok(result);
        }
    }
}

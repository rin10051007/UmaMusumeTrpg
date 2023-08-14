using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Auth.Login;
using UmaMusumeTrpg.Models.Auth.Permission;

namespace UmaMusumeTrpg.Controllers;

[AllowAnonymous]
[Route("Api/Auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly ILogger<AuthController> _logger;

    public AuthController(ILogger<AuthController> logger, IAuthService authService)
    {
        _logger = logger;
        _authService = authService;
    }


    [HttpPost]
    [Route("Login")]
    public ActionResult<LoginResponse> Login([Required][FromBody] LoginRequest loginRequest)
    {
        return Ok(new LoginResponse
        {
            LoginItem = _authService.Login(loginRequest.LoginUser)
        });
    }


    [Authorize]
    [HttpPost]
    [Route("TokenUpdate")]
    public ActionResult<LoginResponse> TokenUpdate()
    {
        return Ok(new LoginResponse
        {
            LoginItem = _authService.TokenUpdate(
                int.Parse(HttpContext.User.Claims.First(x => x.Type.Equals(MyClaimTypes.Id)).Value))
        });
    }

    [Authorize]
    [HttpGet]
    [Route("isSysPermissionToAdmin")]
    public ActionResult<PermissionResponse> IsSysPermissionToAdmin()
    {
        return Ok(new PermissionResponse
        {
            PlayerName = MyPolicyName.SysAdminPolicy,
            IsAllows = IsPermission(MyClaimTypes.SysPermission, SysPermission.SysAdmin.ToString())
        });
        ;
    }

    [Authorize]
    [HttpGet]
    [Route("isUmaMusumeGmPlayer")]
    public ActionResult<PermissionResponse> IsUmaMusumeGmPlayer()
    {
        return Ok(new PermissionResponse
        {
            PlayerName = MyPolicyName.UmaMusumeGmPlayerPolicy,
            IsAllows = IsPermission(MyClaimTypes.UmaMusumeTrpgPermission, UmaMusumeTrpgPermission.GmPlayer.ToString())
        });
    }

    [Authorize]
    [HttpGet]
    [Route("isUmaMusumePlayer")]
    public ActionResult<PermissionResponse> IsUmaMusumePlayer()
    {
        return Ok(new PermissionResponse
        {
            PlayerName = MyPolicyName.UmaMusumePlayerPolicy,
            IsAllows = IsPermission(MyClaimTypes.UmaMusumeTrpgPermission, UmaMusumeTrpgPermission.Player.ToString())
        });
    }

    private bool IsPermission(string myClaimType, string permissionStr)
    {
        return HttpContext.User.Claims.First(x => x.Type.Equals(myClaimType)).Value.Equals(permissionStr);
    }
}
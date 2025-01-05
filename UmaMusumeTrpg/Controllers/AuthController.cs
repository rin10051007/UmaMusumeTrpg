using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Auth.Login;
using UmaMusumeTrpg.Models.Auth.Permission;

namespace UmaMusumeTrpg.Controllers;

[Route("Api/Auth")]
[Authorize]
[ApiController]
public class AuthController(ILogger<AuthController> logger, IAuthService authService) : ControllerBase
{
    private readonly ILogger<AuthController> _logger = logger;


    [HttpPost]
    [AllowAnonymous]
    [Route("Login")]
    public ActionResult<LoginResponse> Login([Required] [FromBody] LoginRequest loginRequest)
    {
        return Ok(new LoginResponse
        {
            LoginItem = authService.Login(loginRequest.LoginUser)
        });
    }


    [HttpPost]
    [Route("TokenUpdate")]
    public ActionResult<LoginResponse> TokenUpdate()
    {
        return Ok(new LoginResponse
        {
            LoginItem = authService.TokenUpdate(
                int.Parse(HttpContext.User.Claims.First(x => x.Type.Equals(MyClaimTypes.Id)).Value))
        });
    }

    [HttpGet]
    [Route("isSysPermissionToAdmin")]
    public ActionResult<PermissionResponse> IsSysPermissionToAdmin()
    {
        return Ok(new PermissionResponse
        {
            PolicyName = MyPolicyName.SysAdminPolicy,
            IsAllows = IsPermission(MyClaimTypes.SysPermission, SysPermission.SysAdmin.ToString())
        });
    }

    [HttpGet]
    [Route("isUmaMusumeGmPlayer")]
    public ActionResult<PermissionResponse> IsUmaMusumeGmPlayer()
    {
        return Ok(new PermissionResponse
        {
            PolicyName = MyPolicyName.UmaMusumeGmPlayerPolicy,
            IsAllows = IsPermission(MyClaimTypes.UmaMusumeTrpgPermission, UmaMusumeTrpgPermission.GmPlayer.ToString())
        });
    }

    [HttpGet]
    [Route("isUmaMusumePlayer")]
    public ActionResult<PermissionResponse> IsUmaMusumePlayer()
    {
        return Ok(new PermissionResponse
        {
            PolicyName = MyPolicyName.UmaMusumePlayerPolicy,
            IsAllows = IsPermission(MyClaimTypes.UmaMusumeTrpgPermission, UmaMusumeTrpgPermission.Player.ToString())
        });
    }

    [AllowAnonymous]
    [HttpGet]
    [Route("isPermission")]
    private bool IsPermission(string myClaimType, string permissionStr)
    {
        return HttpContext.User.Claims.First(x => x.Type.Equals(myClaimType)).Value.Equals(permissionStr);
    }
}
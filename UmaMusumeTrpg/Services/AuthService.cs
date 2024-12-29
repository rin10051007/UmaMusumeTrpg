using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Auth.Login;
using UmaMusumeTrpg.Models.Settings;

namespace UmaMusumeTrpg.Services;

public class AuthService(
    UmaMusumeTrpgDbContext dbContext,
    IOptions<JwtSettings> jwtSettings,
    ILogger<AuthService> logger)
    : IAuthService
{
    private readonly JwtSettings _jwtSettings = jwtSettings.Value;
    private readonly ILogger<AuthService> _logger = logger;

    public LoginItem Login(LoginUser loginUser)
    {
        JwtSecurityTokenHandler handler = new();

        var user = dbContext.Users.SingleOrDefault(x => x.LoginId.Equals(loginUser.LoginId) && !x.IsDeleted);

        if (user == null || !user.VerifyHashedPassword(loginUser.Password)) return new LoginItem("");

        Claim[] claims =
        [
            new(MyClaimTypes.LoginId, user.LoginId),
            new(MyClaimTypes.Id, user.Id.ToString()),
            new(MyClaimTypes.Name, user.Name),
            new(MyClaimTypes.SysPermission, user.SysPermission.ToString()),
            new(MyClaimTypes.UmaMusumeTrpgPermission, user.UmaMusumeTrpgPermission.ToString())
        ];

        SigningCredentials credentials = new(
            _jwtSettings.SecurityKey(),
            SecurityAlgorithms.HmacSha512);
        var token = handler.CreateJwtSecurityToken(
            audience: _jwtSettings.Audience,
            issuer: _jwtSettings.Issuer,
            expires: DateTime.Now.AddSeconds(_jwtSettings.ExpireTime),
            subject: new ClaimsIdentity(claims),
            signingCredentials: credentials);

        return new LoginItem(handler.WriteToken(token));
    }

    public LoginItem TokenUpdate(int id)
    {
        JwtSecurityTokenHandler handler = new();
        var user = dbContext.Users.SingleOrDefault(x => x.Id == id && !x.IsDeleted);
        if (user == null) return new LoginItem("");
        Claim[] claims =
        [
            new(MyClaimTypes.LoginId, user.LoginId),
            new(MyClaimTypes.Id, user.Id.ToString()),
            new(MyClaimTypes.Name, user.Name),
            new(MyClaimTypes.SysPermission, user.SysPermission.ToString()),
            new(MyClaimTypes.UmaMusumeTrpgPermission, user.UmaMusumeTrpgPermission.ToString())
        ];

        SigningCredentials credentials = new(
            _jwtSettings.SecurityKey(),
            SecurityAlgorithms.HmacSha512);
        var token = handler.CreateJwtSecurityToken(
            audience: _jwtSettings.Audience,
            issuer: _jwtSettings.Issuer,
            expires: DateTime.Now.AddSeconds(_jwtSettings.ExpireTime),
            subject: new ClaimsIdentity(claims),
            signingCredentials: credentials);

        return new LoginItem(handler.WriteToken(token));
    }
}
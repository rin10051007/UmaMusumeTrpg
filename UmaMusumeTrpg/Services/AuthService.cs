﻿using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using UmaMusumeTrpg.Entitys;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Auth.Login;
using UmaMusumeTrpg.Models.Settings;

namespace UmaMusumeTrpg.Services
{
    public class AuthService : IAuthService
    {
        private readonly ILogger<AuthService> _logger;
        private readonly UmaMusumeTrpgDbContext _dbContext;
        private readonly JwtSettings _jwtSettings;

        public AuthService(UmaMusumeTrpgDbContext dbContext, IOptions<JwtSettings> jwtSettings, ILogger<AuthService> logger)
        {
            _dbContext = dbContext;
            _jwtSettings = jwtSettings.Value;
            _logger = logger;
        }

        public LoginItem Login(LoginUser loginUser)
        {
            JwtSecurityTokenHandler handler = new();

            User user = _dbContext.Users.SingleOrDefault(x => x.LoginId.Equals(loginUser.LoginId) && !x.IsDeleted);

            if (!user.VerifyHashedPassword(loginUser.Password))
            {
                return new LoginItem("");
            }

            Claim[] claims = new[] {
                new Claim(MyClaimTypes.LoginId, user.LoginId),
                new Claim(MyClaimTypes.Id, user.ID.ToString()),
                new Claim(MyClaimTypes.Name, user.Name),
                new Claim(MyClaimTypes.SysPermission, user.SysPermission.ToString()),
                new Claim(MyClaimTypes.UmaMusumeTrpgPermission, user.UmaMusumeTrpgPermission.ToString())
            };

            SigningCredentials credentials = new(
                _jwtSettings.SecurityKey(),
                SecurityAlgorithms.HmacSha512);
            JwtSecurityToken token = handler.CreateJwtSecurityToken(
                audience: _jwtSettings.Audience,
                issuer: _jwtSettings.Issuer,
                expires: DateTime.Now.AddSeconds(_jwtSettings.ExpireTime),
                subject: new ClaimsIdentity(claims),
                signingCredentials: credentials);

            return new LoginItem(handler.WriteToken(token));
        }

        public LoginItem TokenUpdate(int Id)
        {

            JwtSecurityTokenHandler handler = new();
            User user = _dbContext.Users.SingleOrDefault(x => x.ID == Id && !x.IsDeleted);
            Claim[] claims = new[] {
                new Claim(MyClaimTypes.LoginId, user.LoginId),
                new Claim(MyClaimTypes.Id, user.ID.ToString()),
                new Claim(MyClaimTypes.Name, user.Name),
                new Claim(MyClaimTypes.SysPermission, user.SysPermission.ToString()),
                new Claim(MyClaimTypes.UmaMusumeTrpgPermission, user.UmaMusumeTrpgPermission.ToString())
            };

            SigningCredentials credentials = new(
                _jwtSettings.SecurityKey(),
                SecurityAlgorithms.HmacSha512);
            JwtSecurityToken token = handler.CreateJwtSecurityToken(
                audience: _jwtSettings.Audience,
                issuer: _jwtSettings.Issuer,
                expires: DateTime.Now.AddSeconds(_jwtSettings.ExpireTime),
                subject: new ClaimsIdentity(claims),
                signingCredentials: credentials);

            return new LoginItem(handler.WriteToken(token));
        }
    }
}

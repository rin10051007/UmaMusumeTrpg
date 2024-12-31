using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using UmaMusumeTrpg.Models.Settings;

namespace UmaMusumeTrpg.Configurations;

public class JwtBearerConfigureOptions(IOptions<JwtSettings> jwtSettings) : IConfigureNamedOptions<JwtBearerOptions>
{
    private readonly JwtSettings _jwtSettings = jwtSettings.Value;

    public void Configure(string name, JwtBearerOptions options)
    {
        if (name != JwtBearerDefaults.AuthenticationScheme) return;

        options.TokenValidationParameters = new TokenValidationParameters
        {
            AudienceValidator = AudienceValidatorDelegate,
            ValidIssuer = _jwtSettings.Issuer,
            IssuerSigningKey = _jwtSettings.SecurityKey(),
            ValidateAudience = true,
            ValidateIssuer = true,
            ValidateIssuerSigningKey = true
        };
    }

    public void Configure(JwtBearerOptions options)
    {
        Configure(JwtBearerDefaults.AuthenticationScheme, options);
    }

    private static bool AudienceValidatorDelegate(IEnumerable<string> audiences, SecurityToken securityToken,
        TokenValidationParameters validationParameters)
    {
        return true;
    }
}
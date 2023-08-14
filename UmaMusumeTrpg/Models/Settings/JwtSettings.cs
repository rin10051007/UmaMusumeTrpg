using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace UmaMusumeTrpg.Models.Settings;

public class JwtSettings
{
    public string Issuer { get; set; }
    public string SecretKey { get; set; }
    public string SiteUrl { get; set; }
    public string Audience { get; set; }
    public int ExpireTime { get; set; }


    public SymmetricSecurityKey SecurityKey()
    {
        return new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey));
    }
}
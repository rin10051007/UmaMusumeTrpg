using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace UmaMusumeTrpg.Models.Settings
{
    public class JwtSettings
    {
        public string Issuer { get; set; }
        public string SecretKey { get; set; }
        public string SiteUrl { get; set; }
        public int ExpireTime { get; set; }


        public SymmetricSecurityKey SecurityKey()
        {
            return new(Encoding.UTF8.GetBytes(SecretKey));
        }
    }
}

namespace UmaMusumeTrpg.Models.Auth.Login
{
    public class LoginItem
    {
        public LoginItem(string token)
        {
            Token = token;
        }

        public string Token { get; set; }
    }
}

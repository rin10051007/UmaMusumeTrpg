namespace UmaMusumeTrpg.Models.Auth.Login;

public class LoginItem(string token)
{
    public string Token { get; set; } = token;
}
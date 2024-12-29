using UmaMusumeTrpg.Models.Auth.Login;

namespace UmaMusumeTrpg.IServices;

public interface IAuthService
{
    public LoginItem Login(LoginUser loginUser);
    public LoginItem TokenUpdate(int id);
}
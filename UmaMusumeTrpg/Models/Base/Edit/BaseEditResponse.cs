using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.Edit;

public class BaseEditResponse : PublicBaseResponse
{
    public BaseEditResponse(int id, string token)
    {
        Id = id;
        Token = token;
    }

    public int Id { get; set; }
    public string Token { get; set; }
}
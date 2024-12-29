using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.Edit;

public class BaseEditResponse(int id, string token) : PublicBaseResponse
{
    public int Id { get; set; } = id;
    public string Token { get; set; } = token;
}
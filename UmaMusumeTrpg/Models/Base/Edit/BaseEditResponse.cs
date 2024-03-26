using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.Edit;

public class BaseEditResponse : PublicBaseResponse
{
    public BaseEditResponse(int id, string name, string token)
    {
        Id = id;
        Name = name;
        Token = token;
    }

    public int Id { get; set; }
    public string Name { get; set; }
    public string Token { get; set; }
}
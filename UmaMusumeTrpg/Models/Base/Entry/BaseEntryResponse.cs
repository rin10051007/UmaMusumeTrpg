using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.Entry;

public class BaseEntryResponse : PublicBaseResponse
{
    public BaseEntryResponse(int id, string token)
    {
        Id = id;
        Token = token;
    }

    public int Id { get; set; }
    public string Token { get; set; }
}
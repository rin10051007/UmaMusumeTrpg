using UmaMusumeTrpg.Models.Base.Public;

namespace UmaMusumeTrpg.Models.Base.Entry;

public class BaseEntryResponse(int id, string token) : PublicBaseResponse
{
    public int Id { get; set; } = id;
    public string Token { get; set; } = token;
}
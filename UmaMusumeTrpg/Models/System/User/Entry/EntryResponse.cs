using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.System.User.Entry;

public class EntryResponse : BaseEntryResponse
{
    public EntryResponse(int id, string token) : base(id, token)
    {
    }
}
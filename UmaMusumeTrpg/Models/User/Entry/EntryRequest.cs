using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.User.Entry;

public class EntryRequest(EntryItem entry) : BaseEntryRequest(entry)
{
    public new EntryItem Entry { get; set; } = entry;
}
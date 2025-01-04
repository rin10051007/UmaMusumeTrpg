using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.Thread.Entry;

public class EntryRequest(EntryItem entry) : BaseEntryRequest(entry)
{
    public new EntryItem Entry { get; set; } = entry;
}
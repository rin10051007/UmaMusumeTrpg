using UmaMusumeTrpg.Models.Base.Entry;

namespace UmaMusumeTrpg.Models.System.Entry;

public class EntryRequest : BaseEntryRequest
{
    public EntryRequest(EntryItem entry) : base(entry)
    {
        Entry = entry;
    }

    public new EntryItem Entry { get; set; }
}
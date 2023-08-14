namespace UmaMusumeTrpg.Models.Base.Entry;

public class BaseEntryRequest
{
    public BaseEntryRequest(BaseEntryItem entry)
    {
        Entry = entry;
    }

    public BaseEntryItem Entry { get; set; }
}
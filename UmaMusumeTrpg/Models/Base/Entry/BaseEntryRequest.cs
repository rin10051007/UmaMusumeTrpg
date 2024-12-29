namespace UmaMusumeTrpg.Models.Base.Entry;

public class BaseEntryRequest(BaseEntryItem entry)
{
    public BaseEntryItem Entry { get; set; } = entry;
}
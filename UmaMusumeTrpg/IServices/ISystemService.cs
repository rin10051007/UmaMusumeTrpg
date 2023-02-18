using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.IServices
{
    public interface ISystemService
    {
        public List<ListItem> GetList(ListSearch search);
        public (int, string) Entry(EntryItem item);
    }
}

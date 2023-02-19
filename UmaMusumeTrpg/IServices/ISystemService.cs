using UmaMusumeTrpg.Models.System.Delete;
using UmaMusumeTrpg.Models.System.Detail;
using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.IServices
{
    public interface ISystemService
    {
        public List<ListItem> GetList(ListSearch search);
        public (int, string) Entry(EntryItem item);
        public DetailItem Detil(DetailSearch serch);
        public (int, DateTime?) Delete(DeleteItem item);
    }
}

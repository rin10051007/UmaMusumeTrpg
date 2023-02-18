using UmaMusumeTrpg.Models.Base.Detail;
using UmaMusumeTrpg.Models.System.Detail;
using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.IServices
{
    public interface ISystemService
    {
        public List<ListItem> GetList(ListSearch search);
        public (int, string) Entry(EntryItem item);
        public DetailItem Detil(BaseDetailSerch serch);
    }
}

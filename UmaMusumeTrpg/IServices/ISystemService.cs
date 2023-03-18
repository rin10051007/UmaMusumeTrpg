using UmaMusumeTrpg.Models.System.Delete;
using UmaMusumeTrpg.Models.System.Detail;
using UmaMusumeTrpg.Models.System.Edit;
using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.List;
using UmaMusumeTrpg.Models.System.LoginIdConf;

namespace UmaMusumeTrpg.IServices
{
    public interface ISystemService
    {
        public List<ListItem> GetList(ListSearch search);
        public (int, string) Entry(EntryItem item);
        public DetailItem Detil(DetailSearch serch);
        public (int, string, string) Edit(EditItem item);
        public (int, DateTime?) Delete(DeleteItem item);
        public bool IsLoginIdDuplicate(LoginIdConfItem item);
    }
}

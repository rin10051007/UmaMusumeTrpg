using UmaMusumeTrpg.Models.System.User.Delete;
using UmaMusumeTrpg.Models.System.User.Detail;
using UmaMusumeTrpg.Models.System.User.Edit;
using UmaMusumeTrpg.Models.System.User.Entry;
using UmaMusumeTrpg.Models.System.User.IsLoginIdDuplicate;
using UmaMusumeTrpg.Models.System.User.List;

namespace UmaMusumeTrpg.IServices;

public interface ISystemUserService
{
    public (List<ListItem>, int) GetList(ListSearch search);
    public (int, string) Entry(EntryItem item);
    public DetailItem Detail(DetailSelect select);
    public (int, string) Edit(EditItem item);
    public (int, DateTime?) Delete(DeleteItem item);
    public bool IsLoginIdDuplicate(IsLoginIdDuplicateItem item);
}
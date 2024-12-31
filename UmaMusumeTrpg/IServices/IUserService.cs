using UmaMusumeTrpg.Models.User.Delete;
using UmaMusumeTrpg.Models.User.Detail;
using UmaMusumeTrpg.Models.User.Edit;
using UmaMusumeTrpg.Models.User.Entry;
using UmaMusumeTrpg.Models.User.IsLoginIdDuplicate;
using UmaMusumeTrpg.Models.User.List;

namespace UmaMusumeTrpg.IServices;

public interface IUserService
{
    public (List<ListItem>, int) GetList(ListSearch search);
    public (int, string) Entry(EntryItem item);
    public DetailItem Detail(DetailSelect select);
    public (int, string) Edit(EditItem item);
    public (int, DateTime?) Delete(DeleteItem item);
    public bool IsLoginIdDuplicate(IsLoginIdDuplicateItem item);
    public bool PasswordReset(int id, string password);
}
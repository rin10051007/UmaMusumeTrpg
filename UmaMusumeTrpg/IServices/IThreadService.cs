using UmaMusumeTrpg.Models.Thread.Delete;
using UmaMusumeTrpg.Models.Thread.Entry;
using UmaMusumeTrpg.Models.Thread.List;

namespace UmaMusumeTrpg.IServices;

public interface IThreadService
{
    public (List<ListItem>, int) GetList(ListSearch search);
    public (List<ListItemForThread>, int) GetList(ListSearchForThread search);
    public (List<ListItemForSystemThread>, int) GetList(ListSearchForSystemThread search);
    public (List<ListItemForUser>, int) GetList(ListSearchForUser search);
    public (int, string) Entry(EntryItem entry);
    public (int, DateTime?) Delete(DeleteItem delete);
}
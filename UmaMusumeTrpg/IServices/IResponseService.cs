using UmaMusumeTrpg.Models.Response.Entry;
using UmaMusumeTrpg.Models.Response.List;

namespace UmaMusumeTrpg.IServices;

public interface IResponseService
{
    public (List<ListItem>, int) GetList(ListSearch search);
    public (List<ListItemForThread>, int) GetList(ListSearchForThread search);
    public (List<ListItemForUser>, int) GetList(ListSearchForUser search);
    public (int, string) Entry(EntryItem item);
}
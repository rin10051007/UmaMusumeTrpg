﻿using UmaMusumeTrpg.Models.System.Delete;
using UmaMusumeTrpg.Models.System.Detail;
using UmaMusumeTrpg.Models.System.Edit;
using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.IsLoginIdDuplicate;
using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.IServices;

public interface ISystemService
{
    public (List<ListItem>, int) GetList(ListSearch search);
    public (int, string) Entry(EntryItem item);
    public DetailItem Detail(DetailSelect select);
    public (int, string, string) Edit(EditItem item);
    public (int, DateTime?) Delete(DeleteItem item);
    public bool IsLoginIdDuplicate(IsLoginIdDuplicateItem item);
}
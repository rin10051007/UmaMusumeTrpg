﻿using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.User.List;

public class ListResponse(List<ListItem> items, int length, ListSearch search)
    : BaseListResponse(items.Cast<BaseListItem>().ToList(), length, search)
{
    public new ListSearch Search { get; set; } = search;
    public new List<ListItem> Items { get; set; } = items;
}
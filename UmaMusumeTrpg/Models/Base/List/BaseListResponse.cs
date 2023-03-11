﻿namespace UmaMusumeTrpg.Models.Base.List
{
    public class BaseListResponse
    {
        public BaseListResponse(List<BaseListItem> items, int totalCount, BaseListSearch search)
        {
            Search = search;
            Items = items;
            TotalCount = totalCount;
        }

        public BaseListSearch Search { get; set; }
        public List<BaseListItem> Items { get; set; }
        public int TotalCount { get; set; }
    }
}

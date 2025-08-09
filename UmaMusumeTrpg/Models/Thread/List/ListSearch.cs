using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.Thread.List;

public class ListSearch : BaseListSearch
{
    public ListSearch()
    {
    }

    public ListSearch(string title, int resCountMin, int resCountMax, bool isDeleted, bool isUndeleted,
        ThreadSortItem sortItem, SortDirection sortDirection, int pageIndex, int pageSize) : base(sortDirection,
        pageIndex, pageSize)
    {
        Title = title;
        ResCountMin = resCountMin;
        ResCountMax = resCountMax;
        IsUndeleted = isUndeleted;
        IsDeleted = isDeleted;
        SortItem = sortItem;
    }

    public string Title { get; set; }
    public int ResCountMin { get; set; }
    public int ResCountMax { get; set; }
    public bool IsUndeleted { get; set; }
    public bool IsDeleted { get; set; }
    public ThreadSortItem SortItem { get; set; }
}

public class ListSearchForThread : ListSearch
{
    public ListSearchForThread()
    {
    }

    public ListSearchForThread(DateTime creatingTimeBeginning, DateTime creatingTimeEnd, DateTime updatingTimeBeginning,
        DateTime updatingTimeEnd, DateTime deletingTimeBeginning, DateTime deletingTimeEnd, string title,
        int resCountMin,
        int resCountMax, bool isDeleted, bool isUndeleted, ThreadSortItem sortItem, SortDirection sortDirection,
        int pageIndex, int pageSize) : base(title, resCountMin, resCountMax, isDeleted, isUndeleted, sortItem,
        sortDirection, pageIndex, pageSize)
    {
        CreatingTimeBeginning = creatingTimeBeginning;
        CreatingTimeEnd = creatingTimeEnd;
        UpdatingTimeBeginning = updatingTimeBeginning;
        UpdatingTimeEnd = updatingTimeEnd;
        DeletingTimeBeginning = deletingTimeBeginning;
        DeletingTimeEnd = deletingTimeEnd;
    }

    public DateTime? CreatingTimeBeginning { get; set; }
    public DateTime? CreatingTimeEnd { get; set; }
    public DateTime? UpdatingTimeBeginning { get; set; }
    public DateTime? UpdatingTimeEnd { get; set; }
    public DateTime? DeletingTimeBeginning { get; set; }
    public DateTime? DeletingTimeEnd { get; set; }
}

public class ListSearchForSystemThread : ListSearchForThread
{
    public ListSearchForSystemThread()
    {
    }

    public ListSearchForSystemThread(int creatingUserId, bool isActive, DateTime creatingTimeBeginning,
        DateTime creatingTimeEnd,
        DateTime updatingTimeBeginning, DateTime updatingTimeEnd, DateTime deletingTimeBeginning,
        DateTime deletingTimeEnd,
        string title, int resCountMin, int resCountMax, bool isDeleted, bool isUndeleted, ThreadSortItem sortItem,
        SortDirection sortDirection, int pageIndex, int pageSize) : base(creatingTimeBeginning, creatingTimeEnd,
        updatingTimeBeginning, updatingTimeEnd, deletingTimeBeginning, deletingTimeEnd, title, resCountMin, resCountMax,
        isDeleted, isUndeleted, sortItem, sortDirection, pageIndex, pageSize)
    {
        CreatingUserId = creatingUserId;
        IsActive = isActive;
    }

    public int CreatingUserId { get; set; }
    public bool IsActive { get; set; }
}

public class ListSearchForUser : ListSearch
{
    public ListSearchForUser()
    {
    }

    public ListSearchForUser(int creatingUserId, string title, int resCountMin, int resCountMax, bool isDeleted,
        bool isUndeleted, ThreadSortItem sortItem, SortDirection sortDirection, int pageIndex,
        int pageSize) : base(title, resCountMin, resCountMax, isDeleted, isUndeleted, sortItem, sortDirection,
        pageIndex, pageSize)
    {
        CreatingUserId = creatingUserId;
    }

    public int CreatingUserId { get; set; }
}
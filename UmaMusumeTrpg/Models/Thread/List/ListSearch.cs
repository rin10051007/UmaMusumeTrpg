using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.Thread.List;

public class ListSearch : BaseListSearch
{
    public ListSearch()
    {
    }

    public ListSearch(string title, int resCountMin, int resCountMax, bool isDeleted, bool isUndeleted,
        ThreadSortItem sortItem, SortDirection sortDirection, int pageIndexIndex, int pageSize) : base(sortDirection,
        pageIndexIndex, pageSize)
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

    public ListSearchForThread(DateTime creationTimeBeginning, DateTime creationTimeEnd, DateTime updateTimeBeginning,
        DateTime updateTimeEnd, DateTime deleteTimeBeginning, DateTime deleteTimeEnd, string title, int resCountMin,
        int resCountMax, bool isDeleted, bool isUndeleted, ThreadSortItem sortItem, SortDirection sortDirection,
        int pageIndexIndex, int pageSize) : base(title, resCountMin, resCountMax, isDeleted, isUndeleted, sortItem,
        sortDirection, pageIndexIndex, pageSize)
    {
        CreationTimeBeginning = creationTimeBeginning;
        CreationTimeEnd = creationTimeEnd;
        UpdateTimeBeginning = updateTimeBeginning;
        UpdateTimeEnd = updateTimeEnd;
        DeletedTimeBeginning = deleteTimeBeginning;
        DeletedTimeEnd = deleteTimeEnd;
    }

    public DateTime? CreationTimeBeginning { get; set; }
    public DateTime? CreationTimeEnd { get; set; }
    public DateTime? UpdateTimeBeginning { get; set; }
    public DateTime? UpdateTimeEnd { get; set; }
    public DateTime? DeletedTimeBeginning { get; set; }
    public DateTime? DeletedTimeEnd { get; set; }
}

public class ListSearchForSystemThread : ListSearchForThread
{
    public ListSearchForSystemThread()
    {
    }

    public ListSearchForSystemThread(int creationUserId, DateTime creationTimeBeginning, DateTime creationTimeEnd,
        DateTime updateTimeBeginning, DateTime updateTimeEnd, DateTime deleteTimeBeginning, DateTime deleteTimeEnd,
        string title, int resCountMin, int resCountMax, bool isDeleted, bool isUndeleted, ThreadSortItem sortItem,
        SortDirection sortDirection, int pageIndexIndex, int pageSize) : base(creationTimeBeginning, creationTimeEnd,
        updateTimeBeginning, updateTimeEnd, deleteTimeBeginning, deleteTimeEnd, title, resCountMin, resCountMax,
        isDeleted, isUndeleted, sortItem, sortDirection, pageIndexIndex, pageSize)
    {
        CreationUserId = creationUserId;
    }

    public int CreationUserId { get; set; }
}

public class ListSearchForUser : ListSearch
{
    public ListSearchForUser()
    {
    }

    public ListSearchForUser(int creationUserId, string title, int resCountMin, int resCountMax, bool isDeleted,
        bool isUndeleted, ThreadSortItem sortItem, SortDirection sortDirection, int pageIndexIndex,
        int pageSize) : base(title, resCountMin, resCountMax, isDeleted, isUndeleted, sortItem, sortDirection,
        pageIndexIndex, pageSize)
    {
        CreationUserId = creationUserId;
    }

    public int CreationUserId { get; set; }
}
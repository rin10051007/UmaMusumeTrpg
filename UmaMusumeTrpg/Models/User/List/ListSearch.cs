using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.User.List;

public class ListSearch : BaseListSearch
{
    public ListSearch()
    {
    }

    public ListSearch(string integration, string loginId, string name, string email, SysPermission sysPermission,
        UmaMusumeTrpgPermission umaMusumeTrpgPermission, UserSortItem sortItem, bool isUndeleted, bool isDeleted,
        DateTime creationTimeBeginning, DateTime creationTimeEnd, DateTime updateTimeBeginning, DateTime updateTimeEnd,
        DateTime deletedTimeBeginning, DateTime deletedTimeEnd, SortDirection sortDirection, int pageIndexIndex,
        int pageSize) : base(sortDirection, pageIndexIndex, pageSize)
    {
        Integration = integration;
        LoginId = loginId;
        Name = name;
        Email = email;
        SysPermission = sysPermission;
        UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
        IsUndeleted = isUndeleted;
        IsDeleted = isDeleted;
        CreationTimeBeginning = creationTimeBeginning;
        CreationTimeEnd = creationTimeEnd;
        UpdateTimeBeginning = updateTimeBeginning;
        UpdateTimeEnd = updateTimeEnd;
        DeletedTimeBeginning = deletedTimeBeginning;
        DeletedTimeEnd = deletedTimeEnd;
        SortItem = sortItem;
    }

    public string Integration { get; set; }
    public string LoginId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public SysPermission SysPermission { get; set; }
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
    public bool IsUndeleted { get; set; }
    public bool IsDeleted { get; set; }
    public DateTime? CreationTimeBeginning { get; set; }
    public DateTime? CreationTimeEnd { get; set; }
    public DateTime? UpdateTimeBeginning { get; set; }
    public DateTime? UpdateTimeEnd { get; set; }
    public DateTime? DeletedTimeBeginning { get; set; }
    public DateTime? DeletedTimeEnd { get; set; }
    public UserSortItem SortItem { get; set; }
}
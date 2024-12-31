using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.Models.Base.List;

namespace UmaMusumeTrpg.Models.User.List;

public class ListSearch : BaseListSearch
{
    public ListSearch()
    {
    }

    public ListSearch(string integration, string loginId, string name, string email, SysPermission sysPermission,
        UmaMusumeTrpgPermission umaMusumeTrpgPermission, SystemSortItem sortItem, int isUndeleted, int isDeleted,
        DateTime CreationTimeStart, DateTime CreationTimeEnd, DateTime updateTimeStart, DateTime updateTimeEnd,
        DateTime deletedTimeStart, DateTime deletedTimeEnd, SortDirection sortDirection, int pageIndexIndex,
        int pageSize) : base(sortDirection, pageIndexIndex, pageSize)
    {
        Integration = integration;
        LoginId = loginId;
        Name = name;
        Email = email;
        SortDirection = sortDirection;
        SysPermission = sysPermission;
        UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
        IsUndeleted = isUndeleted;
        IsDeleted = isDeleted;
        CreationTimeStart = CreationTimeStart;
        CreationTimeEnd = CreationTimeEnd;
        UpdateTimeStart = updateTimeStart;
        UpdateTimeEnd = updateTimeEnd;
        DeletedTimeStart = deletedTimeStart;
        DeletedTimeEnd = deletedTimeEnd;
        SortItem = sortItem;
    }

    public string Integration { get; set; }
    public string LoginId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public SysPermission SysPermission { get; set; }
    public UmaMusumeTrpgPermission UmaMusumeTrpgPermission { get; set; }
    public int IsUndeleted { get; set; }
    public int IsDeleted { get; set; }
    public DateTime? CreationTimeStart { get; set; }
    public DateTime? CreationTimeEnd { get; set; }
    public DateTime? UpdateTimeStart { get; set; }
    public DateTime? UpdateTimeEnd { get; set; }
    public DateTime? DeletedTimeStart { get; set; }
    public DateTime? DeletedTimeEnd { get; set; }
    public SystemSortItem SortItem { get; set; }
}
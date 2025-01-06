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
        DateTime creatingTimeBeginning, DateTime creatingTimeEnd, DateTime updatingTimeBeginning,
        DateTime updatingTimeEnd,
        DateTime deletingTimeBeginning, DateTime deletingTimeEnd, SortDirection sortDirection, int pageIndex,
        int pageSize) : base(sortDirection, pageIndex, pageSize)
    {
        Integration = integration;
        LoginId = loginId;
        Name = name;
        Email = email;
        SysPermission = sysPermission;
        UmaMusumeTrpgPermission = umaMusumeTrpgPermission;
        IsUndeleted = isUndeleted;
        IsDeleted = isDeleted;
        CreatingTimeBeginning = creatingTimeBeginning;
        CreatingTimeEnd = creatingTimeEnd;
        UpdatingTimeBeginning = updatingTimeBeginning;
        UpdatingTimeEnd = updatingTimeEnd;
        DeletingTimeBeginning = deletingTimeBeginning;
        DeletingTimeEnd = deletingTimeEnd;
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
    public DateTime? CreatingTimeBeginning { get; set; }
    public DateTime? CreatingTimeEnd { get; set; }
    public DateTime? UpdatingTimeBeginning { get; set; }
    public DateTime? UpdatingTimeEnd { get; set; }
    public DateTime? DeletingTimeBeginning { get; set; }
    public DateTime? DeletingTimeEnd { get; set; }
    public UserSortItem SortItem { get; set; }
}
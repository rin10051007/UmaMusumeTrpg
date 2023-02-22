using UmaMusumeTrpg.Enums;

namespace UmaMusumeTrpg.Models.Base.List
{
    public class BaseListSearch
    {
        public BaseListSearch(SotrDirection sortDirection, int displayPage, int displayCount)
        {
            SortDirection = sortDirection;
            DisplayPage = displayPage;
            DisplayCount = displayCount;
        }
        public SotrDirection SortDirection { get; set; }
        public int DisplayPage { get; set; }
        public int DisplayCount { get; set; }
    }
}

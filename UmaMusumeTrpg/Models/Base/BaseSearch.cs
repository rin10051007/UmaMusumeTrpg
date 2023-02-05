using UmaMusumeTrpg.Enum;

namespace UmaMusumeTrpg.Models.Base
{
    public class BaseSearch
    {
        public BaseSearch(SotrDirection sortDirection, int displayPage, int displayCount)
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

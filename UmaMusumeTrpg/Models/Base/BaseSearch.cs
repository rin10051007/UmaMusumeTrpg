using UmaMusumeTrpg.Enum;

namespace UmaMusumeTrpg.Models.Base
{
    public class BaseSearch
    {
        public SotrDirection SortDirection { get; set; }
        public int DisplayPage { get; set; }
        public int DisplayCount { get; set; }
    }
}

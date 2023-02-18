using UmaMusumeTrpg.Enum;

namespace UmaMusumeTrpg.Models.Base.Detail
{
    public class BaseDetailItem
    {
        public BaseDetailItem(int id, string name, string token, DateTime updateTime)
        {
            Id = id;
            Name = name;
            Token = token;
            UpdateTime = updateTime;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Token { get; set; }
        public DateTime UpdateTime { get; set; }
    }
}

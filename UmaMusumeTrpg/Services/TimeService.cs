using UmaMusumeTrpg.IServices;

namespace UmaMusumeTrpg.Services
{
    public class TimeService : ITimeService
    {
        public TimeService()
        {
            Now = DateTime.Now;
        }

        private readonly DateTime Now;

        public DateTime NowTime()
        {
            return Now;
        }
    }
}

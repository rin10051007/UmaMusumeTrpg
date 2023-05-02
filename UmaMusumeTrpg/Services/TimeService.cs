using UmaMusumeTrpg.IServices;

namespace UmaMusumeTrpg.Services;

public class TimeService : ITimeService
{
    private readonly DateTime Now;

    public TimeService()
    {
        Now = DateTime.Now;
    }

    public DateTime NowTime()
    {
        return Now;
    }
}
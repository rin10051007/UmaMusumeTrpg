using UmaMusumeTrpg.IServices;

namespace UmaMusumeTrpg.Services;

public class DisplayCountService : IDisplayCountService
{
    private static readonly int[] Values = [10, 25, 50, 100];

    public int Get(int index)
    {
        return Values[index];
    }
}
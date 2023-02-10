using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.IServices
{
    public interface ISystemService
    {
        public List<Item> GetList(Search search);
    }
}

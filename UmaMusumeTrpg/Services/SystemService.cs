using Microsoft.Extensions.Options;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.Services
{
    public class SystemService : ISystemService
    {
        private readonly UmaMusumeTrpgDbContext _dbContext;
        public SystemService(UmaMusumeTrpgDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Item> GetList(Search search)
        {
            return _dbContext.Users.Select(s => new Item(s)).ToList();
        }
    }
}

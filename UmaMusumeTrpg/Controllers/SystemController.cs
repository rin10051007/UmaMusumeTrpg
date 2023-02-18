using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Base.Detail;
using UmaMusumeTrpg.Models.System.Detail;
using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.List;
using UmaMusumeTrpg.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UmaMusumeTrpg.Controllers
{
    [Route("Api/System")]
    [ApiController]
    public class SystemController : ControllerBase
    {
        private readonly ILogger<SystemController> _logger;
        private readonly ISystemService _systemService;
        private readonly IDisplayCountService _displayCount;
        public SystemController(ILogger<SystemController> logger, ISystemService systemService, IDisplayCountService displayCount)
        {
            _logger = logger;
            _systemService = systemService;
            _displayCount = displayCount;
        }


        [HttpPost, Route("GetList")]
        public ActionResult<IEnumerable<ListResponse>> GetList([FromBody] ListRequest request)
        {
            ListSearch search = request is null ? new ListSearch(
                "", SotrDirection.None, UmaMusumeTrpgPermission.None,
                SystemSortItem.None, 1, _displayCount.Get(1)
                ) : request.Search;
            var items = _systemService.GetList(search);
            return Ok(new ListResponse(items, items.Count, search));
        }

        [HttpPost, Route("Entry")]
        public ActionResult<IEnumerable<EntryResponse>> Entry([FromBody] EntryRequest request)
        {
            (int id, string token) = request is null ? (-1, "") : _systemService.Entry(request.Entry);
            return Ok(new EntryResponse(id, token));
        }

        [HttpPost, Route("Detail")]
        public ActionResult<IEnumerable<DetailResponse>> Detail([FromBody] BaseDetailRequest request)
        {
            return Ok(new DetailResponse(_systemService.Detil(request.Seach)));
        }
    }
}

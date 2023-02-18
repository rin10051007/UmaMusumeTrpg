using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.IServices;
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
        public ActionResult<IEnumerable<ListResponse>> GetList([FromBody] ListRequest Request)
        {
            ListSearch search = Request is null ? new ListSearch(
                "", SotrDirection.None, UmaMusumeTrpgPermission.None,
                SystemSortItem.None, 1, _displayCount.Get(1)
                ) : Request.Search;
            var items = _systemService.GetList(search);
            return Ok(new ListResponse(items, items.Count, search));
        }

        [HttpPost, Route("Entry")]
        public ActionResult<IEnumerable<EntryResponse>> Entry([FromBody] EntryRequest Request)
        {
            (int id, string token) = Request is null ? (-1, "") : _systemService.Entry(Request.Entry);
            return Ok(new EntryResponse(id, token));
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<SystemController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SystemController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SystemController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using UmaMusumeTrpg.Enum;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.System.List;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UmaMusumeTrpg.Controllers
{
    [Route("Api/System")]
    [ApiController]
    public class SystemController : ControllerBase
    {
        private readonly ILogger<SystemController> _logger;
        private readonly ISystemService _systemService;
        public SystemController(ILogger<SystemController> logger, ISystemService systemService)
        {
            _logger = logger;
            _systemService = systemService;
        }


        [HttpPost, Route("GetList")]
        public ActionResult<IEnumerable<Response>> GetList([FromBody] Request Request)
        {
            Search search = Response is null ? new Search(
                "", SotrDirection.None, UmaMusumeTrpgPermission.NoQualification,
                SystemSortItem.None, 1, 10
                ) : Request.Search;
            var items = _systemService.GetList(search);
            return Ok(new Response(items, items.Count, search));
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

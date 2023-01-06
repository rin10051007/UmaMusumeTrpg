using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Models.System.List;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UmaMusumeTrpg.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SystemController : ControllerBase
    {
        private static readonly List<Item> _Items = new()
        {
            new Item(){Id=1,Name="山田　一郎",SysPermission=Enum.SysPermission.NoQualification,  UmaMusumeTrpgPermission=Enum.UmaMusumeTrpgPermission.NoQualification},
            new Item(){Id=2,Name="田中　二郎",SysPermission=Enum.SysPermission.SysAdmin,         UmaMusumeTrpgPermission=Enum.UmaMusumeTrpgPermission.GmPlayer},
            new Item(){Id=3,Name="佐藤　三郎",SysPermission=Enum.SysPermission.NoQualification,  UmaMusumeTrpgPermission=Enum.UmaMusumeTrpgPermission.Player},
            new Item(){Id=4,Name="吉田　四郎",SysPermission=Enum.SysPermission.SysAdmin,         UmaMusumeTrpgPermission=Enum.UmaMusumeTrpgPermission.GmPlayer},
            new Item(){Id=5,Name="大野　五郎",SysPermission=Enum.SysPermission.NoQualification,  UmaMusumeTrpgPermission=Enum.UmaMusumeTrpgPermission.NoQualification},
        };
        private readonly ILogger<SystemController> _logger;
        public SystemController(ILogger<SystemController> logger)
        {
            _logger = logger;
        }
        // GET: api/<SystemController>
        //public ActionResult<IEnumerable<Response>> GetList([FromQuery] Request Request)
        [HttpGet, Route("GetList")]
        public ActionResult<IEnumerable<Response>> GetList([FromQuery] Request Request)
        {
            return Ok(new Response()
            {
                Items = _Items,
                Search = Request.Search,
                TotalCount = 10
            });
        }

        // GET api/<SystemController>/5
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

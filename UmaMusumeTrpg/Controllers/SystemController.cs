using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.System.Delete;
using UmaMusumeTrpg.Models.System.Detail;
using UmaMusumeTrpg.Models.System.Edit;
using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.List;
using UmaMusumeTrpg.Models.System.LoginIdConf;

namespace UmaMusumeTrpg.Controllers;

[Route("Api/System")]
[Authorize(Policy = MyPolicyName.SysAdminPolicy)]
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


    [HttpPost]
    [Route("GetList")]
    public ActionResult<IEnumerable<ListResponse>> GetList([Required] [FromBody] ListRequest request)
    {
        var items = _systemService.GetList(request.Search);
        return Ok(new ListResponse(items, items.Count, request.Search));
    }

    [HttpPost]
    [Route("Entry")]
    public ActionResult<IEnumerable<EntryResponse>> Entry([Required] [FromBody] EntryRequest request)
    {
        var (id, token) = _systemService.Entry(request.Entry);
        return Ok(new EntryResponse(id, token));
    }

    [HttpPost]
    [Route("Detail")]
    public ActionResult<IEnumerable<DetailResponse>> Detail([Required] [FromBody] DetailRequest request)
    {
        return Ok(new DetailResponse(_systemService.Detil(request.Search)));
    }

    [HttpPost]
    [Route("Edit")]
    public ActionResult<IEnumerable<EditResponse>> Edit([Required] [FromBody] EditRequest request)
    {
        var (id, name, token) = _systemService.Edit(request.Edit);
        return Ok(new EditResponse(id, name, token));
    }

    [HttpPost]
    [Route("Delete")]
    public ActionResult<IEnumerable<DeleteResponse>> Delete([Required] [FromBody] DeleteRequest request)
    {
        var (id, deleteTime) = _systemService.Delete(request.Delete);
        return Ok(new DeleteResponse(id, deleteTime));
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("LoginIdConf")]
    public bool LoginIdConf([Required] [FromBody] LoginIdConfRequest request)
    {
        return _systemService.IsLoginIdDuplicate(request.LoginIdItem);
    }
}
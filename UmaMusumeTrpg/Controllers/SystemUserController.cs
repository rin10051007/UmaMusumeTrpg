using System.ComponentModel.DataAnnotations;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.System.Delete;
using UmaMusumeTrpg.Models.System.Detail;
using UmaMusumeTrpg.Models.System.Edit;
using UmaMusumeTrpg.Models.System.Entry;
using UmaMusumeTrpg.Models.System.IsLoginIdDuplicate;
using UmaMusumeTrpg.Models.System.List;

namespace UmaMusumeTrpg.Controllers;

[Route("Api/System/User")]
[Authorize(Policy = MyPolicyName.SysAdminPolicy)]
[ApiController]
public class SystemUserController : ControllerBase
{
    private readonly ILogger<SystemUserController> _logger;
    private readonly ISystemUserService _systemUserService;

    public SystemUserController(ILogger<SystemUserController> logger, ISystemUserService systemUserService)
    {
        _logger = logger;
        _systemUserService = systemUserService;
    }


    [HttpPost]
    [Route("GetList")]
    public ActionResult<IEnumerable<ListResponse>> GetList([Required] [FromBody] ListRequest request)
    {
        var (items, length) = _systemUserService.GetList(request.Search);
        return Ok(new ListResponse(items, length, request.Search));
    }

    [HttpPost]
    [Route("Entry")]
    public ActionResult<IEnumerable<EntryResponse>> Entry([Required] [FromBody] EntryRequest request)
    {
        try
        {
            var (id, token) = _systemUserService.Entry(request.Entry);
            return Ok(new EntryResponse(id, token));
        }
        catch (Exception)
        {
            return BadRequest(new EntryResponse(0, "")
            {
                HttpStatusCode = HttpStatusCode.BadRequest
            });
        }
    }

    [HttpPost]
    [Route("Detail")]
    public ActionResult<IEnumerable<DetailResponse>> Detail([Required] [FromBody] DetailRequest request)
    {
        try
        {
            return Ok(new DetailResponse(_systemUserService.Detail(request.Select)));
        }
        catch (Exception)
        {
            return BadRequest(new DetailResponse(new DetailItem())
            {
                HttpStatusCode = HttpStatusCode.BadRequest
            });
        }
    }

    [HttpPost]
    [Route("Edit")]
    public ActionResult<IEnumerable<EditResponse>> Edit([Required] [FromBody] EditRequest request)
    {
        try
        {
            var (id, name, token) = _systemUserService.Edit(request.Edit);
            if (id == 0) throw new Exception();
            return Ok(new EditResponse(id, token));
        }
        catch (Exception)
        {
            return BadRequest(new EditResponse(0, "")
            {
                HttpStatusCode = HttpStatusCode.BadRequest
            });
        }
    }

    [HttpPost]
    [Route("Delete")]
    public ActionResult<IEnumerable<DeleteResponse>> Delete([Required] [FromBody] DeleteRequest request)
    {
        var (id, deleteTime) = _systemUserService.Delete(request.Delete);
        return Ok(new DeleteResponse(id, deleteTime));
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("IsLoginIdDuplicate")]
    public bool IsLoginIdDuplicate([Required] [FromBody] IsLoginIdDuplicateRequest request)
    {
        return _systemUserService.IsLoginIdDuplicate(request.LoginId);
    }
}
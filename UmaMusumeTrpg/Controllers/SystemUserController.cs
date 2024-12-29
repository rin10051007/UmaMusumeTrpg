using System.ComponentModel.DataAnnotations;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.System.User.Delete;
using UmaMusumeTrpg.Models.System.User.Detail;
using UmaMusumeTrpg.Models.System.User.Edit;
using UmaMusumeTrpg.Models.System.User.Entry;
using UmaMusumeTrpg.Models.System.User.IsLoginIdDuplicate;
using UmaMusumeTrpg.Models.System.User.List;

namespace UmaMusumeTrpg.Controllers;

[Route("Api/System/User")]
[Authorize(Policy = MyPolicyName.SysAdminPolicy)]
[ApiController]
public class SystemUserController(ILogger<SystemUserController> logger, ISystemUserService systemUserService)
    : ControllerBase
{
    private readonly ILogger<SystemUserController> _logger = logger;


    [HttpPost]
    [Route("GetList")]
    public ActionResult<IEnumerable<ListResponse>> GetList([Required] [FromBody] ListRequest request)
    {
        var (items, length) = systemUserService.GetList(request.Search);
        return Ok(new ListResponse(items, length, request.Search));
    }

    [HttpPost]
    [Route("Entry")]
    public ActionResult<IEnumerable<EntryResponse>> Entry([Required] [FromBody] EntryRequest request)
    {
        try
        {
            var (id, token) = systemUserService.Entry(request.Entry);
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
            return Ok(new DetailResponse(systemUserService.Detail(request.Select)));
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
            var (id, token) = systemUserService.Edit(request.Edit);
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
        var (id, deleteTime) = systemUserService.Delete(request.Delete);
        return Ok(new DeleteResponse(id, deleteTime));
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("IsLoginIdDuplicate")]
    public bool IsLoginIdDuplicate([Required] [FromBody] IsLoginIdDuplicateRequest request)
    {
        return systemUserService.IsLoginIdDuplicate(request.LoginId);
    }
}
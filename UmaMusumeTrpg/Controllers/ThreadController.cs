using System.ComponentModel.DataAnnotations;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Thread.Delete;
using UmaMusumeTrpg.Models.Thread.Detail;
using UmaMusumeTrpg.Models.Thread.Entry;
using UmaMusumeTrpg.Models.Thread.List;

namespace UmaMusumeTrpg.Controllers;

[Route("Api/Thread")]
[Authorize]
[ApiController]
public class ThreadController(ILogger<ThreadController> logger, IThreadService threadService) : ControllerBase
{
    private readonly ILogger<ThreadController> _logger = logger;

    [HttpPost]
    [Route("GetList")]
    public ActionResult<IEnumerable<ListResponse>> GetList([FromBody] ListRequest request)
    {
        var (items, length) = threadService.GetList(request.Search);
        return Ok(new ListResponse(items, length, request.Search));
    }

    [HttpPost]
    [Route("GetListForThread")]
    public ActionResult<IEnumerable<ListResponseForThread>> GetList([FromBody] ListRequestForThread request)
    {
        var (items, length) = threadService.GetList(request.Search);
        return Ok(new ListResponseForThread(items, length, request.Search));
    }

    [HttpPost]
    [Authorize(Policy = MyPolicyName.SysAdminPolicy)]
    [Route("GetListForSystemThread")]
    public ActionResult<IEnumerable<ListResponseForSystemThread>> GetList([FromBody] ListRequestForSystemThread request)
    {
        var (items, length) = threadService.GetList(request.Search);
        return Ok(new ListResponseForSystemThread(items, length, request.Search));
    }

    [HttpPost]
    [Route("Entry")]
    public ActionResult<IEnumerable<EntryResponse>> Entry([Required] [FromBody] EntryRequest request)
    {
        try
        {
            var (id, token) = threadService.Entry(request.Entry);
            return Ok(new EntryResponse(id, token));
        }
        catch
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
            return Ok(new DetailResponse(threadService.Detail(request.Select)));
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
    [Authorize(Policy = MyPolicyName.SysAdminPolicy)]
    [Route("Delete")]
    public ActionResult<IEnumerable<DeleteResponse>> Delete([Required] [FromBody] DeleteRequest request)
    {
        var (id, deletingTime) = threadService.Delete(request.Delete);
        return Ok(new DeleteResponse(id, deletingTime));
    }
}
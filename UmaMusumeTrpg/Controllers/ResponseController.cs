using System.ComponentModel.DataAnnotations;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Response.Entry;
using UmaMusumeTrpg.Models.Response.List;

namespace UmaMusumeTrpg.Controllers;

[Route("Api/System/Response")]
[Authorize(Policy = MyPolicyName.SysAdminPolicy)]
[ApiController]
public class ResponseController(ILogger<ResponseController> logger, IResponseService responseService) : ControllerBase
{
    private readonly ILogger<ResponseController> _logger = logger;

    [HttpPost]
    [Route("GetList")]
    public ActionResult<IEnumerable<ListResponse>> GetList([Required] [FromBody] ListRequest request)
    {
        var (items, length) = responseService.GetList(request.Search);
        return Ok(new ListResponse(items, length, request.Search));
    }

    [HttpPost]
    [Route("GetListForThread")]
    public ActionResult<IEnumerable<ListResponseForThread>> GetList([Required] [FromBody] ListRequestForThread request)
    {
        var (items, length) = responseService.GetList(request.Search);
        return Ok(new ListResponseForThread(items, length, request.Search));
    }

    [HttpPost]
    [Route("GetListForUser")]
    public ActionResult<IEnumerable<ListResponseForThread>> GetList([Required] [FromBody] ListRequestForUser request)
    {
        var (items, length) = responseService.GetList(request.Search);
        return Ok(new ListResponseForUser(items, length, request.Search));
    }

    [HttpPost]
    [Route("Entry")]
    public ActionResult<IEnumerable<EntryResponse>> Entry([Required] [FromBody] EntryRequest request)
    {
        try
        {
            var (id, token) = responseService.Entry(request.Entry);
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
}
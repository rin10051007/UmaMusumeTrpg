﻿using System.ComponentModel.DataAnnotations;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Enums;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.User.Delete;
using UmaMusumeTrpg.Models.User.Detail;
using UmaMusumeTrpg.Models.User.Edit;
using UmaMusumeTrpg.Models.User.Entry;
using UmaMusumeTrpg.Models.User.IsLoginIdDuplicate;
using UmaMusumeTrpg.Models.User.List;

namespace UmaMusumeTrpg.Controllers;

[Route("Api/System/User")]
[Authorize(Policy = MyPolicyName.SysAdminPolicy)]
[ApiController]
public class SystemUserController(ILogger<SystemUserController> logger, IUserService userService)
    : ControllerBase
{
    private readonly ILogger<SystemUserController> _logger = logger;


    [HttpPost]
    [Route("GetList")]
    public ActionResult<IEnumerable<ListResponse>> GetList([Required] [FromBody] ListRequest request)
    {
        var (items, length) = userService.GetList(request.Search);
        return Ok(new ListResponse(items, length, request.Search));
    }

    [HttpPost]
    [Route("Entry")]
    public ActionResult<IEnumerable<EntryResponse>> Entry([Required] [FromBody] EntryRequest request)
    {
        try
        {
            var (id, token) = userService.Entry(request.Entry);
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
            return Ok(new DetailResponse(userService.Detail(request.Select)));
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
            var (id, token) = userService.Edit(request.Edit);
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
        var (id, deleteTime) = userService.Delete(request.Delete);
        return Ok(new DeleteResponse(id, deleteTime));
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("IsLoginIdDuplicate")]
    public bool IsLoginIdDuplicate([Required] [FromBody] IsLoginIdDuplicateRequest request)
    {
        return userService.IsLoginIdDuplicate(request.LoginId);
    }
}
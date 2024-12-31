using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Enums;

namespace UmaMusumeTrpg.Controllers;

[Route("Api/System/Thread")]
[Authorize(Policy = MyPolicyName.SysAdminPolicy)]
[ApiController]
public class SystemThreadController(ILogger<SystemThreadController> logger) : ControllerBase
{
    private readonly ILogger<SystemThreadController> _logger = logger;
}
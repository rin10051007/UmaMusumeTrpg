using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg.Enums;

namespace UmaMusumeTrpg.Controllers;

[Route("Api/System/Thread")]
[Authorize(Policy = MyPolicyName.SysAdminPolicy)]
[ApiController]
public class ThreadController(ILogger<ThreadController> logger) : ControllerBase
{
    private readonly ILogger<ThreadController> _logger = logger;
}
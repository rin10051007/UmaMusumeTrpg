using System.Net;

namespace UmaMusumeTrpg.Models.Base.Public;

public class PublicBaseResponse
{
    public HttpStatusCode HttpStatusCode { get; set; } = HttpStatusCode.OK;
}
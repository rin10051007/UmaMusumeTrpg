using System.Net;

namespace UmaMusumeTrpg.Models.Base.Public;

public class PublicBaseResponse
{
    protected PublicBaseResponse()
    {
        HttpStatusCode = HttpStatusCode.OK;
    }

    public HttpStatusCode HttpStatusCode { get; set; }
}
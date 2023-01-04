using Microsoft.AspNetCore.Mvc;
using UmaMusumeTrpg;

namespace TestApp.Controllers
{
    [ApiController]
    // Router��path��ݒ肷��
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        // Get�p�����[�^�[������Ƃ�
        [HttpGet]
        [Route("GetList")]
        public IEnumerable<WeatherForecast> Get([FromQuery] string str)
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = str
            })
            .ToArray();
        }

        [HttpGet]
        [Route("List")]
        public IEnumerable<WeatherForecast> List()
        {
            return Enumerable.Range(1, 10).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
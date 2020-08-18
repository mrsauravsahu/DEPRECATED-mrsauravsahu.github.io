using Microsoft.AspNetCore.Mvc;

namespace blogs.Controllers
{
    [ApiController]
    [Route("")]
    public class WeatherForecastController : ControllerBase
    {
        [HttpGet]
        public dynamic GetAppInfo()
        {
            return new {
                Name = "blogs",
                Version = "0.0.0-alpha.1"
            };
        }
    }
}

using System.Net;
using System.Threading.Tasks;
using mrsauravsahu.api.dto;
using mrsauravsahu.api.options;
using mrsauravsahu.services;
using Microsoft.AspNetCore.Mvc;
using Propfull.AspNet.Config;
using Swashbuckle.AspNetCore.Annotations;

namespace mrsauravsahu.api.Controllers
{
    [ApiController]
    [Route("")]
    public class AppController : ControllerBase
    {
        public AppController(ConfigService<AboutAppOptions> configService,
        LocalFileService localFileService)
        {
            this.configService = configService;
            this.localFileService = localFileService;
        }
        private readonly ConfigService<AboutAppOptions> configService;
        private readonly LocalFileService localFileService;

        [HttpGet]
        [SwaggerResponse(200, "Retrieved the app info", typeof(Envelope<AppInfo>))]
        public async Task<IActionResult> GetAppInfo()
        {
            var aboutConfig = await configService.GetConfigAsync();

            var appInfo = new AppInfo(
                aboutConfig.AppName,
                aboutConfig.ContactEmail,
                $"v{aboutConfig.Version}");

            return Ok(new Envelope<AppInfo>(appInfo));
        }
    }
}

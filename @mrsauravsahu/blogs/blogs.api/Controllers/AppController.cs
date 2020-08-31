using System.Threading.Tasks;
using blogs.api.dto;
using blogs.api.options;
using blogs.services;
using Microsoft.AspNetCore.Mvc;
using Propfull.AspNet.Config;

namespace blogs.api.Controllers
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
        [ProducesDefaultResponseType(typeof(Response<AppInfo>))]
        public async Task<IActionResult> GetAppInfo()
        {
            var aboutConfig = await configService.GetConfigAsync();

            var appInfo = new AppInfo
            {
                Name = aboutConfig.AppName,
                ContactEmail = aboutConfig.ContactEmail,
                Version = $"v{aboutConfig.Version}"
            };

            return Ok(new Response<AppInfo>
            {
                Data = appInfo
            });
        }
    }
}

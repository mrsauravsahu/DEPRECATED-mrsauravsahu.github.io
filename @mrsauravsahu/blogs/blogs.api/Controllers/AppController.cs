using System;
using System.IO;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using blogs.api.options;
using blogs.services;
using Microsoft.AspNetCore.Mvc;
using Propfull.AspNet.Config;
using Propfull.AspNet.Config.Exceptions;

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
        public async Task<IActionResult> GetAppInfo()
        {
            var aboutConfig = await configService.GetConfigAsync();
            return Ok(new
            {
                Data = aboutConfig
            });
        }
    }
}

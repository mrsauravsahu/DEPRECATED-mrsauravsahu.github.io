using System;
using System.IO;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using blogs.api.contracts;
using blogs.services;
using Microsoft.AspNetCore.Mvc;
using Propfull.AspNet.Config;

namespace blogs.api.Controllers
{
    [ApiController]
    [Route("")]
    public class AppController : ControllerBase
    {
        public AppController(ConfigService<AppAboutConfig> configService,
        LocalFileService localFileService)
        {
            this.configService = configService;
            this.localFileService = localFileService;
        }
        private readonly ConfigService<AppAboutConfig> configService;
        private readonly LocalFileService localFileService;

        [HttpGet]
        public async Task<AppAboutConfig> GetAppInfo()
        {
            var aboutConfig = await configService.GetConfigAsync();

            var fileName = $"{DateTime.UtcNow.ToString().Replace("/", "-")}.txt";
            var data = JsonSerializer.Serialize(aboutConfig);
            var stream = new MemoryStream(Encoding.UTF8.GetBytes(data));
            
            await localFileService.SaveBlobAsync("dotnet", fileName, stream);

            return aboutConfig;
        }
    }
}

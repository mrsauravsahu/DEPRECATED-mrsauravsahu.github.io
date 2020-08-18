using System.Threading.Tasks;
using blogs.Contracts;
using Microsoft.AspNetCore.Mvc;
using Propfull.AspNet.Config;

namespace blogs.Controllers
{
    [ApiController]
    [Route("")]
    public class AppController : ControllerBase
    {
public AppController(ConfigService<AppAboutConfig> configService){
    this.configService = configService;
}
private readonly ConfigService<AppAboutConfig> configService ;

        [HttpGet]
        public async Task<AppAboutConfig> GetAppInfo()
        {
            var aboutConfig = await configService.GetConfigAsync();
            return aboutConfig;
        }
    }
}

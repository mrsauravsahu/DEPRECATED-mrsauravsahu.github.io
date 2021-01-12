using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using blogs.services;
using Sieve.Models;

namespace blogs.api
{
    [Route("api/[controller]")]
    public class HighlightsController : ControllerBase
    {
        private readonly HighlightsService highlightsService;

        public HighlightsController(HighlightsService highlightsService)
        {
            this.highlightsService = highlightsService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllHighlightsAsync(SieveModel sieveModel)
        {
            var res = await highlightsService.GetAllAsync(sieveModel);
            return Ok(res);
        }
    }
}
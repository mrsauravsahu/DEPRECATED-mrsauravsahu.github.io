using blogs.services.contracts;
using blogs.services.integrations;
using Sieve.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blogs.services
{
    public class HighlightsService : IBasicService<HighlightDto>
    {
        private readonly GithubService githubService;

        public HighlightsService(GithubService githubService)
        {
            this.githubService = githubService;
        }

        public async Task<PaginatedResult<List<HighlightDto>>> GetAllAsync(SieveModel sieve = null)
        {
            var highlightedProjects = await githubService.GetHighightedItemsAsync();

            var githubHighlights = highlightedProjects
                .Select(highlight => new HighlightDto {
                    Id = highlight.GetProperty("id").ToString(),
                    Title = highlight.GetProperty("name").ToString(),
                    Description = highlight.GetProperty("name").ToString(),
                    Url = highlight.GetProperty("url").ToString(),
                    Type = HighlightType.GithubProject
                })
                .ToList();


            return new PaginatedResult<List<HighlightDto>>() {
                Data = githubHighlights,
                Count = githubHighlights.Count,
                TotalCount = githubHighlights.Count
            };
        }
    }
}
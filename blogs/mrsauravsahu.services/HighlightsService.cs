using mrsauravsahu.services.contracts;
using mrsauravsahu.services.integrations;
using Sieve.Models;
using Sieve.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mrsauravsahu.services
{
    public class HighlightsService : IBasicService<HighlightDto>
    {
        private readonly GithubService githubService;
        private readonly SieveProcessor sieveProcessor;

        public HighlightsService(GithubService githubService,
        SieveProcessor sieveProcessor)
        {
            this.githubService = githubService;
            this.sieveProcessor = sieveProcessor;
        }

        public async Task<PaginatedResult<List<HighlightDto>>> GetAllAsync(SieveModel sieve)
        {
            var highlightedProjects = await githubService.GetHighightedItemsAsync();

            var githubHighlights = highlightedProjects
                .Select(highlight => new HighlightDto
                {
                    Id = highlight.GetProperty("id").ToString(),
                    Title = highlight.GetProperty("name").ToString(),
                    Description = highlight.GetProperty("description").ToString(),
                    Url = highlight.GetProperty("url").ToString(),
                    CreatedAt = highlight.GetProperty("createdAt").GetDateTime(),
                    Type = HighlightType.GithubProject
                })
                .AsQueryable();

            var sievedHighlights = sieveProcessor
                .Apply(sieve, githubHighlights)
                .ToList();

            return new PaginatedResult<List<HighlightDto>>()
            {
                Data = sievedHighlights,
                Count = sievedHighlights.Count,
                TotalCount = sievedHighlights.Count
            };
        }
    }
}
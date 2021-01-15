using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// using blogs.api.extensions;
// using blogs.api.gql;
using blogs.data.context;
using blogs.data.models;
using blogs.services;
using blogs.services.contracts;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Pagination;
using Microsoft.EntityFrameworkCore;
using Sieve.Models;

namespace blogs.api.contracts
{
    public class Query
    {
        [UsePaging]
        [UseSorting]
        public IQueryable<Blog> GetBlogs([Service] BlogsContext dbContext) => dbContext.Blogs.OrderByDescending(p => p.CreatedAt);

        public IQueryable<Link> GetLinks([Service] BlogsContext dbContext) => dbContext.Links;
        
        public Task<Blog> GetBlogByIdAsync(BlogRouteParams input, [Service] BlogsService blogsService)
        => blogsService.GetByIdAsync(input.Id);

        public Task<int> BlogsCount([Service] BlogsContext dbContext) => dbContext.Blogs.CountAsync();        

        public async Task<IQueryable<HighlightDto>> GetHighlightsAsync([Service] HighlightsService highlightsService)
        {
            var highlights = await highlightsService.GetAllAsync(new SieveModel());
            return highlights.Data.AsQueryable();
        }
    }
}
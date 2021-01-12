using System.Threading.Tasks;
using blogs.data.models;
using blogs.services;
using blogs.services.contracts;
using HotChocolate;

namespace blogs.api.contracts
{
    public class Mutation
    {
        public async Task<BlogDto> AddBlogAsync(
            CreateBlogDto input,
            [Service] BlogsService blogsService
        )
        {
            var addedBlog = await blogsService.AddBlogAsync(input);
            return addedBlog;
        }
    }
}
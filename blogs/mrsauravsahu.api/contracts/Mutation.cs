using System.Threading.Tasks;
using mrsauravsahu.services;
using mrsauravsahu.services.contracts;
using HotChocolate;

namespace mrsauravsahu.api.contracts
{
    public class Mutation
    {
        public async Task<BlogDto> AddBlogAsync(
            AddBlogInput input,
            [Service] BlogsService blogsService
        )
        {
            var blogToAdd = new CreateBlogDto
            {
                Title = input.Title,
                Description = input.Description,
                Slug = input.Slug
            };

            var addedBlog = await blogsService.AddBlogAsync(blogToAdd);
            return addedBlog;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using blogs.data.context;
using blogs.data.models;
using blogs.services.contracts;
using Microsoft.EntityFrameworkCore;

namespace blogs.services
{
    public class BlogsService : IBasicService<Blog>
    {
        private readonly BlogsContext blogsContext;

        public BlogsService(BlogsContext blogsContext)
        {
            this.blogsContext = blogsContext;
        }

        public async Task<PaginatedResult<List<Blog>>> GetAllAsync()
        {
            var totalCount = await blogsContext.Blogs.LongCountAsync();
            var blogs = await blogsContext.Blogs.ToListAsync();

            var result = new PaginatedResult<List<Blog>>
            {
                Data = blogs,
                Count = blogs.Count,
                TotalCount = totalCount
            };

            return result;
        }

        public async Task<BlogDto> AddBlogAsync(CreateBlogDto blog)
        {
            // TODO: Update this with an AutoMapper or similar mapping library
            var result = blogsContext.Blogs.Add(new Blog
            {
                Title = blog.Title,
                Description = blog.Description,
                Slug = blog.Slug,
                CreatedAt = DateTime.UtcNow,
            });

            await blogsContext.SaveChangesAsync();

            var addedBlog = result.Entity;
            var response = new BlogDto {
                Id = addedBlog.Id,
                Title = addedBlog.Title,
                Description = addedBlog.Description,
                Slug = addedBlog.Slug,
                FileUrl = addedBlog.File, // TODO: Convert this to a URL to file download API
                ImageUrls = addedBlog.Images, // TODO: -do-
                CreatedAt = addedBlog.CreatedAt
            };

            return response;
        }
    }
}

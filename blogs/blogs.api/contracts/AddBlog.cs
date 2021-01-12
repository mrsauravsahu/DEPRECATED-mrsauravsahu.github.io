namespace blogs.api.contracts
{
    // TODO: Use this Dto to create Blog
    // TODO: Add validation
    public record AddBlog(
        string Title,
        string Slug,
        string Description);
}
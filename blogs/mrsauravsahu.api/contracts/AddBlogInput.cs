namespace mrsauravsahu.api.contracts
{
    // TODO: Use this Dto to create Blog
    // TODO: Add validation
    public record AddBlogInput(
        string Title,
        string Slug,
        string? Description);
}
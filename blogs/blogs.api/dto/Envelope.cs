namespace blogs.api.dto
{
    public record Envelope<T>(T Data);
}
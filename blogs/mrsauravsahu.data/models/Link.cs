using System;

namespace mrsauravsahu.data.models
{
    public class Link
    {
        public int Id { get; set; }
        public string Title { get; set; } = default!;
        public string? Description { get; set; }
        public string Url { get; set; } = default!;
        public DateTime CreatedAt { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Sieve.Attributes;

namespace mrsauravsahu.data.models
{
    public class Blog
    {
        public Blog()
        {
            Images = new List<string>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Slug { get; set; }

        [Sieve(CanSort = true)]
        public DateTime CreatedAt { get; set; }
        public string File { get; set; }
        public long WordCount { get; set; }
        public string ApproxTimeToRead { get; set; }
        private string images;

        [NotMapped]
        public IEnumerable<string> Images
        {
            get => (images ?? string.Empty).Split(new char[] { Constants.FieldDelimiter }, StringSplitOptions.RemoveEmptyEntries);
            set => images = String.Join(Constants.FieldDelimiter.ToString(), value);
        }

        public string ContainerBasePath => $"{Id}-{Slug}";
    }
}
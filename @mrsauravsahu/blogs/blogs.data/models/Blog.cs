using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace blogs.data.models
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
        public DateTime CreatedAt { get; set; }
        public string File { get; set; }

        private string images;

        [NotMapped]
        public IEnumerable<string> Images { 
            get => images.Split(Constants.FieldDelimiter);
            set => images = String.Join(Constants.FieldDelimiter.ToString(), value);
        }
    }
}
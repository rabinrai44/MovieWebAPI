using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MovieWebApi.Models.Api
{
    public class Movie
    {
        public int Id { get; set; }
        [Required]
        [StringLength(100, ErrorMessage = "The title must be between 2 to 100 characters long.", MinimumLength = 2)]
        public string Title { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        [Display(Name = "Released Year")]
        public int ReleasedYear { get; set; }
    }
}
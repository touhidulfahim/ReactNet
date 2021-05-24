using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ReactNet.Entities.Models
{
    public class FoodModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long SysId { get; set; }
        public string FoodName { get; set; }
        public decimal Price { get; set; }
    }
}

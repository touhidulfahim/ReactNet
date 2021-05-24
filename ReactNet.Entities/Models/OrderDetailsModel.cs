using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ReactNet.Entities.Models
{
    public class OrderDetailsModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long SysId { get; set; }
        public long OrderMasterId { get; set; }
        public long FoodId { get; set; }
        public int Quantity { get; set; }
        public decimal SellPrice { get; set; }


        [ForeignKey("FoodId")]
        public virtual FoodModel Foods { get; set; }

        [ForeignKey("OrderMasterId")]
        public virtual OrderMasterModel OrderMasters { get; set; }

    }
}

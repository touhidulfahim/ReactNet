using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ReactNet.Entities.Models
{
    public class OrderMasterModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long SysId { get; set; }
        public long CustomerId { get; set; }
        public string OrderNo { get; set; }
        public string PaymentMethod { get; set; }

        [ForeignKey("CustomerId")]
        public virtual CustomerModel Customers { get; set; }
    }
}

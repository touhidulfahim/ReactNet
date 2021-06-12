using ReactNet.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactNet.Data.Repository.Command
{
    public interface ICustomerCommand
    {
        void SaveCustomer(CustomerModel customer);
        Task<bool> Commit();
        void UpdateCustomer(CustomerModel customer);
        void Delete(CustomerModel customer);
    }
}

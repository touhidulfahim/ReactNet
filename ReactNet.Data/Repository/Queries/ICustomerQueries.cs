using ReactNet.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactNet.Data.Repository.Queries
{
    public interface ICustomerQueries
    {
        Task<IEnumerable<CustomerModel>> GetCustomerList();
        Task<CustomerModel> GetCustomerById(long? id);
    }
}

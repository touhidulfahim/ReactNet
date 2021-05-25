using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactNet.Data.Gateway;
using ReactNet.Entities.Models;

namespace ReactNet.Data.Repository.Queries
{
    public class CustomerQueries:ICustomerQueries
    {
        private readonly ReactNetDbContext _context;

        public CustomerQueries(ReactNetDbContext context)
        {
            _context = context;
        }

        public async Task<CustomerModel> GetCustomerById(long? id)
        {
            return await _context.CustomerEntity.FindAsync(id);
        }

        public async Task<IEnumerable<CustomerModel>> GetCustomerList()
        {
            return await _context.CustomerEntity.ToListAsync();
        }
    }
}

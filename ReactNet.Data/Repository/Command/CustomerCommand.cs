using ReactNet.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactNet.Data.Gateway;

namespace ReactNet.Data.Repository.Command
{
    public class CustomerCommand : ICustomerCommand
    {
        private readonly ReactNetDbContext _context;

        public CustomerCommand(ReactNetDbContext context)
        {
            _context = context;
        }


        public async Task<bool> Commit()
        {
           await _context.SaveChangesAsync();
           return true;
        }

        public void SaveCustomer(CustomerModel customer)
        {
            _context.CustomerEntity.Add(customer);
        }

        public void UpdateCustomer(CustomerModel customer)
        {
            _context.Entry(customer).State = EntityState.Modified;
        }
    }
}

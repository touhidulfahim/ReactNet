using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactNet.Data.Repository.Command;
using ReactNet.Data.Repository.Queries;
using ReactNet.Entities.Models;

namespace ReactNet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerCommand _command;
        private readonly ICustomerQueries _queries;

        public CustomerController(ICustomerCommand command, ICustomerQueries queries)
        {
            _command = command;
            _queries = queries;
        }


        [HttpGet]
        public async Task<IEnumerable<CustomerModel>> CustomerList()
        {
            return await _queries.GetCustomerList();
        }


        [HttpGet]
        [Route("GetCustomer")]
        public async Task<IActionResult> GetCustomer(long?id)
        {
            if (id==null)
            {
                return NotFound();
            }
            CustomerModel customer = await _queries.GetCustomerById(id);
            if (customer==null)
            {
                return NotFound();
            }
            return Ok(customer);
        }


    }
}

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

        [HttpPost]
        public async Task<ActionResult> Create(CustomerModel customer)
        {
            _command.SaveCustomer(customer);
            if (await _command.Commit())
            {
                return CreatedAtAction("GetCustomer", new { id = customer.SysId }, customer);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");

        }


        [HttpPut("{id}")]
        public async Task<ActionResult> Edit(int id, CustomerModel customer)
        {
            customer.SysId = id;
            _command.UpdateCustomer(customer);
            if (await _command.Commit())
            {
                return CreatedAtAction("GetCustomer", new { id = customer.SysId }, customer);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var customer = await _queries.GetCustomerById(id);
            if (customer == null)
            {
                return NotFound();
            }
            _command.Delete(customer);
            await _command.Commit();
            return Ok();
        }





    }
}

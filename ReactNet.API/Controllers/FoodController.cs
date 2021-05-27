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
    public class FoodController : ControllerBase
    {
        private readonly IFoodCommand _command;
        private readonly IFoodQueries _queries;

        public FoodController(IFoodCommand command, IFoodQueries queries)
        {
            _command = command;
            _queries = queries;
        }


        [HttpGet]
        //[Route("GetFoodList")]
        public async Task<IEnumerable<FoodModel>> GetFoodList()
        {
            return await _queries.GetFoodList();
        }


        [HttpGet]
        [Route("GetFood")]
        public async Task<IActionResult> GetFood(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            FoodModel food = await _queries.GetFoodById(id);
            if (food == null)
            {
                return NotFound();
            }
            return Ok(food);
        }

        [HttpPost]
        public async Task<ActionResult> Create(FoodModel food)
        {
            _command.SaveFood(food);
            if (await _command.Commit())
            {
                return CreatedAtAction("GetFoodList", new { id = food.SysId }, food);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");

        }


    }
}

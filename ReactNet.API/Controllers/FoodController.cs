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


        [HttpPut("{id}")]
        public async Task<ActionResult> Edit(int id, FoodModel food)
        {
            food.SysId = id;
            _command.UpdateFood(food);
            if (await _command.Commit())
            {
                return CreatedAtAction("GetFoodList", new { id = food.SysId }, food);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteDCandidate(int id)
        {
            var food = await _queries.GetFoodById(id);
            if (food == null)
            {
                return NotFound();
            }
            _command.Delete(food);
            await _command.Commit();
            return Ok();
        }


    }
}

using ReactNet.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactNet.Data.Gateway;

namespace ReactNet.Data.Repository.Queries
{
    public class FoodQueries : IFoodQueries
    {
        private readonly ReactNetDbContext _context;

        public FoodQueries(ReactNetDbContext context)
        {
            _context = context;
        }

        public async Task<FoodModel> GetFoodById(long? id)
        {
            return await _context.FoodEntity.FindAsync(id);
        }

        public async Task<IEnumerable<FoodModel>> GetFoodList()
        {
            return await _context.FoodEntity.ToListAsync();
        }

    }
}

using ReactNet.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactNet.Data.Repository.Queries
{
    public interface IFoodQueries
    {
        Task<IEnumerable<FoodModel>> GetFoodList();
        Task<FoodModel> GetFoodById(long? id);
    }
}

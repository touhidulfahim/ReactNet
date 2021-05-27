using ReactNet.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactNet.Data.Repository.Command
{
    public interface IFoodCommand
    {
        void SaveFood(FoodModel food);
        Task<bool> Commit();
        void UpdateFood(FoodModel food);
        void Delete(FoodModel food);
    }
}

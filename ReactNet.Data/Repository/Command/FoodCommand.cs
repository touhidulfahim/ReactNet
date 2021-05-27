﻿using ReactNet.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ReactNet.Data.Gateway;

namespace ReactNet.Data.Repository.Command
{
    public class FoodCommand : IFoodCommand
    {
        private readonly ReactNetDbContext _context;

        public FoodCommand(ReactNetDbContext context)
        {
            _context = context;
        }

        

        public async Task<bool> Commit()
        {
            try
            {
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public void SaveFood(FoodModel food)
        {
            try
            {
                _context.FoodEntity.Add(food);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ReactNet.Data.Repository.Command;
using ReactNet.Data.Repository.Queries;

namespace ReactNet.API.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IFoodCommand, FoodCommand>();
            services.AddScoped<IFoodQueries, FoodQueries>();
            services.AddScoped<ICustomerCommand, CustomerCommand>();
            services.AddScoped<ICustomerQueries, CustomerQueries>();

            return services;
        }
    }
}

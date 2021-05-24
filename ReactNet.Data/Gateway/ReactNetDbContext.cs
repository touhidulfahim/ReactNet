using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactNet.Entities.Models;


namespace ReactNet.Data.Gateway
{
    public class ReactNetDbContext:DbContext
    {
        public ReactNetDbContext(DbContextOptions<ReactNetDbContext> options) : base(options)
        {
            
        }
        

        public virtual  DbSet<FoodModel> FoodEntity { get; set; }
        public virtual DbSet<CustomerModel> CustomerEntity{ get; set; }
        public virtual DbSet<OrderMasterModel> OrderMasterEntity { get; set; }
        public virtual DbSet<OrderDetailsModel> OrderDetailsEntity { get; set; }




        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<FoodModel>().ToTable("Foods");
            modelBuilder.Entity<CustomerModel>().ToTable("Customers");
            modelBuilder.Entity<OrderMasterModel>().ToTable("OrderMasters");
            modelBuilder.Entity<OrderDetailsModel>().ToTable("OrderDetails");
            


            // modelBuilder.Entity<StoresModel>()
            //     .HasOne(u => u.Countries)
            //     .WithMany()
            //     .OnDelete(DeleteBehavior.Restrict);
            //
            // modelBuilder.Entity<StoreUsersModel>()
            //     .HasOne(u => u.Stores)
            //     .WithMany()
            //     .OnDelete(DeleteBehavior.Restrict);
            //
            //
            // modelBuilder.Entity<AuthenticSubModuleModel>()
            //                 .HasOne(u => u.Modules)
            //                 .WithMany()
            //                 .OnDelete(DeleteBehavior.Restrict);
            //
            // modelBuilder.Entity<AuthenticPageModel>()
            //                             .HasOne(u => u.SubModules)
            //                             .WithMany()
            //                             .OnDelete(DeleteBehavior.Restrict);


            
        }



    }
}

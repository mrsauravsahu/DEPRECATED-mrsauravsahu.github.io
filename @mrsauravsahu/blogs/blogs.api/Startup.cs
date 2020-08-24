using System;
using System.Collections.Generic;
using System.IO.Abstractions;
using System.Linq;
using System.Threading.Tasks;
using blogs.api.options;
using blogs.services.contracts;
using blogs.services.options;
using blogs.services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Propfull.AspNet.Config;
using blogs.data.context;
using FileContextCore;
using FileContextCore.Serializer;
using FileContextCore.FileManager;

namespace blogs.api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.Configure<AboutAppOptions>(Configuration.GetSection(nameof(blogs)));
            services.AddSingleton(options => options.GetConfigService<AboutAppOptions>());

            services.AddDbContext<BlogsContext>(options =>
                options.UseFileContextDatabase<CSVSerializer, DefaultFileManager>(
                    location: "/files/Saurav Sahu/Documents/Code/mrsauravsahu.github.io/store"
                )
            );

            services.Configure<LocalFileServiceOptions>(Configuration.GetSection(nameof(blogs)));
            services.AddSingleton<IFileSystem, FileSystem>();
            services.AddSingleton<LocalFileService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

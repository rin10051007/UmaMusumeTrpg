using Microsoft.EntityFrameworkCore;
using UmaMusumeTrpg;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();


builder.Services.AddRazorPages();

IConfiguration config = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .AddEnvironmentVariables()
.Build();


builder.Services.AddDbContext<UmaMusumeTrpgDbContext>(opt => opt.UseNpgsql(config.GetConnectionString("PostgreContext")));



#region ServicsのDI
builder.Services.AddScoped<ISystemService, SystemService>();
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

// APIを呼んだとき
app.MapControllerRoute(
    name: "default",
    pattern: "api/{controller}/{action}");

// クライアントを呼んだとき
app.MapFallbackToFile("index.html");

app.Run();

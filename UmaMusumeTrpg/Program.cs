using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using UmaMusumeTrpg;
using UmaMusumeTrpg.Configurations;
using UmaMusumeTrpg.IServices;
using UmaMusumeTrpg.Models.Settings;
using UmaMusumeTrpg.Services;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();


builder.Services.AddRazorPages();

IConfiguration config = new ConfigurationBuilder()
.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
.AddEnvironmentVariables()
.Build();

builder.Services.AddOptions().Configure<JwtSettings>(config.GetSection("JwtSettings"));

builder.Services.AddSingleton<IConfigureOptions<JwtBearerOptions>, JwtBearerConfigureOptions>();

builder.Services.AddDbContext<UmaMusumeTrpgDbContext>(opt => opt.UseNpgsql(config.GetConnectionString("PostgreContext")));


#region ServicsのDI
builder.Services.AddScoped<IGuidService, GuidService>();
builder.Services.AddScoped<ITimeService, TimeService>();
builder.Services.AddScoped<IDisplayCountService, DisplayCountService>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<ISystemService, SystemService>();
#endregion



WebApplication app = builder.Build();


AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    _ = app.UseHsts();
}


//認証
//app.UseAuthentication();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

// APIを呼んだとき
app.MapControllerRoute(
    name: "default",
    pattern: "api/{controller}/{action}");


// クライアントを呼んだときProgram

app.MapFallbackToFile("/AuthControl", "AuthControl/index.html");
app.MapFallbackToFile("/SystemControl", "SystemControl/index.html");
app.MapFallbackToFile("/UmaMusumeControl", "UmaMusumeControl/index.html");

app.Run();


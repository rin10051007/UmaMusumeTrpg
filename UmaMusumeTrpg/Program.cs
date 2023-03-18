using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using UmaMusumeTrpg;
using UmaMusumeTrpg.Configurations;
using UmaMusumeTrpg.Enums;
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


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {

            var jwtSettings = new JwtSettings();
            config.Bind("JwtSettings", jwtSettings);
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = jwtSettings.Issuer,
                ValidAudience = jwtSettings.Audience,
                IssuerSigningKey = jwtSettings.SecurityKey()
            };
        });
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("SysAdminPolicy", policy =>
        policy.RequireClaim(MyClaimTypes.SysPermission, SysPermission.SysAdmin.ToString()));
    options.AddPolicy("UmaMusumeGmPlayerPolicy", policy =>
        policy.RequireClaim(MyClaimTypes.UmaMusumeTrpgPermission, UmaMusumeTrpgPermission.GmPlayer.ToString()));
    options.AddPolicy("UmaMusumePlayerPolicy", policy =>
        policy.RequireClaim(MyClaimTypes.UmaMusumeTrpgPermission, UmaMusumeTrpgPermission.Player.ToString()));
});


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


app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();


// APIを呼んだとき
app.MapControllerRoute(
    name: "default",
    pattern: "/Api/{controller}/{action}");


// クライアントを呼んだとき
app.MapFallbackToFile("/AuthControl/{*path:nonfile}", "AuthControl/index.html");
app.MapFallbackToFile("/SystemControl/{*path:nonfile}", "SystemControl/index.html");
app.MapFallbackToFile("/UmaMusumeControl/{*path:nonfile}", "UmaMusumeControl/index.html");
app.MapFallbackToFile("AuthControl/index.html");

app.Run();


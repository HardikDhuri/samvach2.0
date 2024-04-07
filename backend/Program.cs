using Samvach.Api.DataService;
using Samvach.Api.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<SharedDB>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();

builder.Services.AddCors(options => 
{
    options.AddPolicy("client", builder => 
    {
        builder.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapHub<ChatHub>("/Chat");

app.UseCors("client");
app.UseHttpsRedirection();
app.Run();
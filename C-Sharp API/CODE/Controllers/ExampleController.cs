


using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class ExampleController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        Console.WriteLine("Hello from example controller");
        return Ok(new { message = "Hello from example controller" });
    }
}
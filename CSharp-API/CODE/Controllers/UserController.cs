


using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private static SemaphoreSlim _semaphore = new(1, 1);

    UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost("{authCode}")]
    public async Task<IActionResult> GetUserOrCreateNew([FromRoute] string authCode)
    {
        try
        {
            User user = await _userService.GetOrCreateNewUserWithAuthCode(authCode);
            return Ok(user);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
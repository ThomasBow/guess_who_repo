


using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class GameController : ControllerBase
{
    [HttpGet("games")]
    public IActionResult GetGames()
    {
        List<GameInfo> games =
        [
            new()
            {
                DisplayName = "Who even listens to this?",
                Discription = "Guess who has the songs in their playlists.",
                Url = "/games/who-even-listens-to-this",
                GameId = "1"
            }
        ];
        return Ok(games);
    }
}
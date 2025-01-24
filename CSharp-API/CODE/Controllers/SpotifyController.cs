


using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class SpotifyController : ControllerBase
{
    private readonly SpotifyService _spotifyService;

    public SpotifyController(SpotifyService spotifyService)
    {
        _spotifyService = spotifyService;
    }

    [HttpGet("auth-url")]
    public IActionResult GetAuthUrl()
    {
        string authUrl = _spotifyService.GetAuthUrl();
        return Ok(authUrl);
    }

    [HttpGet("playlists")]
    public async Task<IActionResult> GetPlaylists(string accessToken)
    {
        try
        {
            SpotifyPlaylistsResponse playlists = await _spotifyService.GetUserPlaylists(accessToken);
            return Ok(playlists);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
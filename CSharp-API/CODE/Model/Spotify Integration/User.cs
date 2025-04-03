




public class User()
{
    public required string Id { get; set; }

    public required string DisplayName { get; set; }
    public required string AccessToken { get; set; }
    public required DateTime AccessTokenReceived { get; set; }
    public required string Country { get; set; }
    public string? RefreshToken { get; set; }
    public int ExpiresIn { get; set; }

    public DateTime LastUpdated { get; set; } = DateTime.Now;

    public required SpotifyImage Image { get; set; }
    public List<SpotifyPlaylist> Playlists { get; set; } = [];

    public bool IsTokenExpired() =>
        DateTime.Now > AccessTokenReceived.AddSeconds(ExpiresIn);
}
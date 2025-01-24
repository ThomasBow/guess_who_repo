


using Newtonsoft.Json;

public class SpotifyPlaylistsResponse(List<SpotifyPlaylist> items)
{
    [JsonProperty("items")]
    public List<SpotifyPlaylist> Playlists { get; set; } = items;
}
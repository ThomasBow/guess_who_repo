


using Newtonsoft.Json;

public class SpotifyPlaylist()
{
    [JsonProperty("id")]
    public required string Id { get; set; }

    [JsonProperty("name")]
    public required string Name { get; set; }

    [JsonProperty("description")]
    public required string Description { get; set; }
}
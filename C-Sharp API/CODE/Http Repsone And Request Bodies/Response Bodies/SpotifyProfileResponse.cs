


using Newtonsoft.Json;

public class SpotifyProfileResponse
{
    [JsonProperty("display_name")]
    public required string DisplayName { get; set; }

    [JsonProperty("country")]
    public required string Country { get; set; }

    [JsonProperty("id")]
    public required string Id { get; set; }

    [JsonProperty("images")]
    public required List<SpotifyImage> Images { get; set; }

    [JsonProperty("product")]
    public required string Product { get; set; }
}
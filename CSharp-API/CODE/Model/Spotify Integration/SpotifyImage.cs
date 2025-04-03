


using Newtonsoft.Json;

public class SpotifyImage
{
    [JsonProperty("url")]
    public required string Id { get; set; }

    public string Url => Id;

    [JsonProperty("height")]
    public int Height { get; set; }

    [JsonProperty("width")]
    public int Width { get; set; }
}
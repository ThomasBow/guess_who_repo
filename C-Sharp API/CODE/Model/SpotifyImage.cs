


using Newtonsoft.Json;

public class SpotifyImage
{
    [JsonProperty("url")]
    public required string Url { get; set; }

    [JsonProperty("height")]
    public int Height { get; set; }

    [JsonProperty("width")]
    public int Width { get; set; }
}
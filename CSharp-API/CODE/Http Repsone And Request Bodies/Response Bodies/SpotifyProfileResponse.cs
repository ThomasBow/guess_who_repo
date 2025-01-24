


using System.Text;
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

    public override string ToString()
    {
        StringBuilder sb = new();
        sb.Append("Display Name: " + DisplayName + "\n");
        sb.Append("Country: " + Country + "\n");
        sb.Append("Id: " + Id + "\n");
        sb.Append("Product: " + Product + "\n");
        sb.Append("Images: \n");
        foreach (SpotifyImage image in Images)
        {
            sb.Append(image.ToString() + "\n");
        }
        return sb.ToString();
    }
}
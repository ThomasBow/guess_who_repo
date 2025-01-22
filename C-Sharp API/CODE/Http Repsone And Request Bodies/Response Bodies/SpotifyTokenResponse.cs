


using Newtonsoft.Json;

public class SpotifyTokenResponse(string accessToken)
{
    [JsonProperty("access_token")]
    public string AccessToken { get; set; } = accessToken;
}
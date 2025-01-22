


using Newtonsoft.Json;

public class SpotifyTokenResponse(string accessToken, int expiresIn, string refreshToken)
{
    [JsonProperty("access_token")]
    public string AccessToken { get; set; } = accessToken;

    [JsonProperty("expires_in")]
    public int ExpiresIn { get; set; } = expiresIn;

    [JsonProperty("refresh_token")]
    public string RefreshToken { get; set; } = refreshToken;
}
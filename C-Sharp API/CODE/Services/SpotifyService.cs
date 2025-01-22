


using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

public class SpotifyService
{
    private static readonly HttpClient client = new();

    private readonly string _clientId;
    private readonly string _clientSecret;

    const string oAuthRedirectUri = "http://localhost:5173/authentication";

    public SpotifyService(IConfiguration configuration)
    {
        _clientId = configuration["MySettings:CLIENT_ID"] ?? throw new Exception("CLIENT_ID not found in configuration");
        _clientSecret = configuration["MySettings:CLIENT_SECRET"] ?? throw new Exception("CLIENT_SECRET not found in configuration");
    }

    public string GetAuthUrl()
    {
        const string scopes =
        "playlist-read-private " +
        "playlist-read-collaborative " +
        "user-read-private " +
        "user-read-email";

        string fullOAuthUrl = $"https://accounts.spotify.com/authorize?response_type=code&client_id={_clientId}&scope={scopes}&redirect_uri={oAuthRedirectUri}";
        return fullOAuthUrl;
    }

    public async Task<string> GetAccessTokenWithAuthCode(string authorizationCode)
    {
        Console.WriteLine("Getting access token with auth code: " + authorizationCode);

        var tokenRequestData = new Dictionary<string, string>
        {
            { "grant_type", "authorization_code" },
            { "code", authorizationCode },
            { "redirect_uri", oAuthRedirectUri },
            { "client_id", _clientId },
            { "client_secret", _clientSecret }
        };

        FormUrlEncodedContent tokenRequestContent = new(tokenRequestData);

        HttpRequestMessage request = new(HttpMethod.Post, "https://accounts.spotify.com/api/token")
        {
            Content = tokenRequestContent
        };

        // Adding required headers
        request.Headers.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.ASCII.GetBytes($"{_clientId}:{_clientSecret}")));
        request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/x-www-form-urlencoded"));

        Console.WriteLine("Sending token request...");
        HttpResponseMessage tokenResponse = await client.SendAsync(request);
        Console.WriteLine("Token response received");

        string tokenResponseContent = await tokenResponse.Content.ReadAsStringAsync();

        if (tokenResponse.IsSuccessStatusCode)
        {
            SpotifyTokenResponse tokenData = JsonConvert.DeserializeObject<SpotifyTokenResponse>(tokenResponseContent) ?? throw new Exception("Error deserializing token response");
            return tokenData.AccessToken ?? throw new Exception("Access token not found in token response");
        }
        else
        {
            throw new Exception($"Error fetching access token:\n {tokenResponse.StatusCode} - {tokenResponseContent}");
        }
    }

    public async Task<SpotifyProfileResponse> GetSpotifyProfileWithAccessToken(string accessToken)
    {
        Console.WriteLine("Getting profile with access token: " + accessToken);

        HttpRequestMessage request = new(HttpMethod.Get, "https://api.spotify.com/v1/me");
        request.Headers.Authorization = new("Bearer", accessToken);

        HttpResponseMessage profileResponse = await client.SendAsync(request);
        string profileResponseContent = await profileResponse.Content.ReadAsStringAsync();

        if (profileResponse.IsSuccessStatusCode)
        {
            SpotifyProfileResponse profileData = JsonConvert.DeserializeObject<SpotifyProfileResponse>(profileResponseContent) ?? throw new Exception("Error deserializing profile response");
            return profileData;
        }
        else
        {
            throw new Exception($"Error fetching user profile:\n {profileResponse.StatusCode} - {profileResponseContent}");
        }
    }

    public async Task<SpotifyPlaylistsResponse> GetUserPlaylists(string accessToken)
    {
        client.DefaultRequestHeaders.Authorization = new("Bearer", accessToken);

        HttpResponseMessage playlistsResponse = await client.GetAsync("https://api.spotify.com/v1/me/playlists");
        string playlistsResponseContent = await playlistsResponse.Content.ReadAsStringAsync();

        if (playlistsResponse.IsSuccessStatusCode)
        {
            SpotifyPlaylistsResponse playlistsData = JsonConvert.DeserializeObject<SpotifyPlaylistsResponse>(playlistsResponseContent) ?? throw new Exception("Error deserializing playlists response");
            return playlistsData;
        }
        else
        {
            throw new Exception($"Error fetching user playlists:\n {playlistsResponse.StatusCode} - {playlistsResponseContent}");
        }
    }
}

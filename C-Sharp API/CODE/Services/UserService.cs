


public class UserService
{
    private readonly DatabaseService _databaseService;
    private readonly SpotifyService _spotifyService;

    public UserService(DatabaseService databaseService, SpotifyService spotifyService)
    {
        _databaseService = databaseService;
        _spotifyService = spotifyService;
    }

    public async Task<User> GetOrCreateNewUserWithAuthCode(string authCode)
    {
        SpotifyTokenResponse tokenResponse = await _spotifyService.GetAccessTokenWithAuthCode(authCode);
        Console.WriteLine("Access token Retrieved: " + tokenResponse);

        SpotifyProfileResponse spotifyProfile = await _spotifyService.GetSpotifyProfileWithAccessToken(tokenResponse.AccessToken);
        User? user = GetUserById(spotifyProfile.Id);

        if (user != null)
        {
            return UpdateUserTokens(user, tokenResponse);
        }
        else
        {
            user = new()
            {
                Id = spotifyProfile.Id,
                DisplayName = spotifyProfile.DisplayName,
                Country = spotifyProfile.Country,
                Image = spotifyProfile.Images[0],
                AccessToken = tokenResponse.AccessToken,
                RefreshToken = tokenResponse.RefreshToken,
                ExpiresIn = tokenResponse.ExpiresIn
            };

            return SaveUser(user);
        }
    }

    public User UpdateUserTokens(User user, SpotifyTokenResponse tokenResponse)
    {
        user.AccessToken = tokenResponse.AccessToken;
        user.RefreshToken = tokenResponse.RefreshToken;
        user.ExpiresIn = tokenResponse.ExpiresIn;
        return SaveUser(user);
    }

    public User SaveUser(User user)
    {
        return _databaseService.SaveUser(user);
    }

    public User? GetUserById(string id)
    {
        return _databaseService.GetUserById(id);
    }

    public void DeleteUser(User user)
    {
        _databaseService.DeleteUser(user);
    }
}
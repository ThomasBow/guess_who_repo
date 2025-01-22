


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
        string accessToken = await _spotifyService.GetAccessTokenWithAuthCode(authCode);
        SpotifyProfileResponse spotifyProfile = await _spotifyService.GetSpotifyProfileWithAccessToken(accessToken);
        User? user = GetUserById(spotifyProfile.Id);

        if (user != null) return user;

        else
        {
            Console.WriteLine("Creating new user with Spotify profile: " + spotifyProfile.Id);
            user = new()
            {
                Id = spotifyProfile.Id,
                DisplayName = spotifyProfile.DisplayName,
                Country = spotifyProfile.Country,
                Image = spotifyProfile.Images[0],
                AccessToken = accessToken,
            };

            SaveUser(user);
            return user;
        }
    }

    public void SaveUser(User user)
    {
        _databaseService.SaveUser(user);
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
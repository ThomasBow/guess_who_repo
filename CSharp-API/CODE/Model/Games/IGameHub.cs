



namespace GuessWho.Hubs;
public interface IGameHub
{
    Task CreateRoom(string roomId, string userId);
    Task JoinRoom(string roomId, string userId);
    Task LeaveRoom(string roomId, string userId);
}
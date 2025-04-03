


using Microsoft.AspNetCore.SignalR;
using GuessWho.Rooms;

namespace GuessWho.Hubs;
public class GameHub : Hub<IGameHub>
{
    private readonly GameRoomManager _roomManager;

    public GameHub(GameRoomManager roomManager)
    {
        _roomManager = roomManager;
    }

    public async Task CreateRoom(string roomId, string connectionId)
    {
        Player owner = new()
        {
            ConnectionId = connectionId,
            DisplayName = Context.User?.Identity?.Name ?? "Unknown"
        };

        _roomManager.AddRoom(roomId, );
        throw new NotImplementedException();
    }

    public async Task JoinRoom(string roomId, string connectionId)
    {
        throw new NotImplementedException();
    }

    public async Task LeaveRoom(string roomId, string connectionId)
    {
        throw new NotImplementedException();
    }

}
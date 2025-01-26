


using Microsoft.AspNetCore.SignalR;

public class GameHub : Hub
{
    private readonly GameRoomManager _roomManager;

    public GameHub(GameRoomManager roomManager)
    {
        _roomManager = roomManager;
    }

    // Create a room and return its ID
    public async Task<string> CreateRoom(string playerName)
    {
        var roomId = Guid.NewGuid().ToString();
        var player = new Player { ConnectionId = Context.ConnectionId, DisplayName = playerName };
        var room = new GameRoom { RoomId = roomId, Owner = player };
        room.Players.Add(player);
        _roomManager.Rooms.Add(roomId, room);
        await Groups.AddToGroupAsync(Context.ConnectionId, roomId);
        return roomId;
    }

    // Join an existing room
    public async Task<bool> JoinRoom(string roomId, string playerName)
    {
        if (!_roomManager.Rooms.TryGetValue(roomId, out var room)) return false;

        var player = new Player { ConnectionId = Context.ConnectionId, DisplayName = playerName };
        room.Players.Add(player);
        await Groups.AddToGroupAsync(Context.ConnectionId, roomId);
        await Clients.Group(roomId).SendAsync("PlayerJoined", playerName);
        return true;
    }
}
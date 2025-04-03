


namespace GuessWho.Rooms;
public class GameRoomManager
{
    Dictionary<string, GameRoom> Rooms { get; } = [];

    public void AddRoom(string roomId, Player owner)
    {
        if (Rooms.ContainsKey(roomId))
            throw new RoomAlreadyExistsException();

        Rooms[roomId] = new()
        {
            RoomId = roomId,
            Owner = owner
        };
    }

    public void RemoveRoom(string roomId)
    {
        if (Rooms.ContainsKey(roomId) == false)
            throw new RoomNotFoundException();

        Rooms.Remove(roomId);
    }
}




namespace GuessWho.Rooms;
public class GameRoom
{
    public required string RoomId { get; set; }
    public required Player Owner { get; set; }
    public List<Player> Players { get; set; } = [];
}




public class RoomNotFoundException : Exception
{
    public RoomNotFoundException() : base("Room not found.")
    {
    }

    public RoomNotFoundException(string message) : base(message)
    {
    }
}
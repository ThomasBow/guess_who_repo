


public class RoomAlreadyExistsException : Exception
{
    public RoomAlreadyExistsException() : base("Room already exists.")
    {

    }

    public RoomAlreadyExistsException(string message) : base(message)
    {

    }
}
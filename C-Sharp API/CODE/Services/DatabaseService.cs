


public class DatabaseService
{
    private readonly ApplicationDatabaseContext _context;

    public DatabaseService(ApplicationDatabaseContext context)
    {
        _context = context;
    }

    public User? GetUserById(string id)
    {
        return _context.Users.Find(id);
    }

    public void SaveUser(User user)
    {
        user.LastUpdated = DateTime.Now;
        _context.Users.Update(user);
        _context.SaveChanges();
    }

    public void DeleteUser(User user)
    {
        _context.Users.Remove(user);
        _context.SaveChanges();
    }
}
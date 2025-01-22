


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

    public User SaveUser(User user, bool? userExists = null)
    {
        user.LastUpdated = DateTime.Now;

        userExists ??= GetUserById(user.Id) != null;

        if (userExists.Value)
        {
            _context.Users.Update(user);
        }
        else
        {
            _context.Users.Add(user);
        }

        _context.SaveChanges();
        return user;
    }

    public void DeleteUser(User user)
    {
        _context.Users.Remove(user);
        _context.SaveChanges();
    }
}
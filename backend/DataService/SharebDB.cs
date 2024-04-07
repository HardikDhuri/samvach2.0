
using System.Collections.Concurrent;
using Samvach.Api.Models;

namespace Samvach.Api.DataService;

public class SharedDB
{
    public readonly IDictionary<string, UserConnection> _connections = new ConcurrentDictionary<string, UserConnection>();
}
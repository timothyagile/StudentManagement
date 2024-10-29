
using backend_dotnet.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_dotnet.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base() { }

        public DbSet<StudentModel> StudentModels { get; set; }
    }
}
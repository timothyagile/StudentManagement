using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend_dotnet.Models
{
    public class StudentModel
    {
        public required int Id { get; set;}
        public required string Name { get; set;}
        public double Age { get; set;}
        public double mathPoint { get; set;}
        public double physicPoint { get; set;}
        public double chemistryPoint { get; set;}
        public double avgPoint { get; set;}
    }
}
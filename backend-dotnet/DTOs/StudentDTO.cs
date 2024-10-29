namespace backend_dotnet.DTOs
{
    public class StudentDTO
    {
        public required string Name { get; set;}
        public double Age { get; set;}
        public double mathPoint { get; set;}
        public double physicPoint { get; set;}
        public double chemistryPoint { get; set;}
    }
}
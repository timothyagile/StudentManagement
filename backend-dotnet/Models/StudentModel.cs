namespace backend_dotnet.Models
{
    public class StudentModel
    {
        public required int Id { get; set;}
        public required string Name { get; set;}
        public double Age { get; set;}
        public double MathPoint { get; set;}
        public double PhysicPoint { get; set;}
        public double ChemistryPoint { get; set;}
        public double? AvgPoint { get; set;}

        
    }
}
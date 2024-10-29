using AutoMapper;
using backend_dotnet.Models;
using backend_dotnet.DTOs;

namespace backend_dotnet.Mapping
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMap() {
            var mappingConig = new MapperConfiguration(congig => {
                congig.CreateMap<StudentDTO, StudentModel>();
                congig.CreateMap<StudentModel, StudentDTO>();
            });
            return mappingConig;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend_dotnet.DTOs
{
    public class ResultDTO<T>
    {
        public bool IsSuccess { get; set; } = true;
        public T? Data { get; set; }
        public string ErrorMessage { get; set; } = string.Empty;
    }
}
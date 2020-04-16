using System;
using System.Collections.Generic;
using System.Text;

namespace SharedLayer.Infra
{
    public class OperationResult<T>
    {
        public T Result { get; set; }

        public IList<String> ErrorMessage { get; set; }

        public string StatusCode { get; set; }
    }
}

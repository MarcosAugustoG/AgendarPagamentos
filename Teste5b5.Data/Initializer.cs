using System;
using System.Data.Entity;

namespace Teste5b5.Data
{
    public static class Initializer
    {
        public static void Initialize() => Database.SetInitializer<PagamentoContext>(null);
    }
}

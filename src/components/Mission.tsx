import { Target, Leaf, Shield, Heart } from "lucide-react";

export function Mission() {
  return (
    <section id="nosotros" className="py-16 bg-[#dbd6d6] w-full overflow-hidden">
      <div className="container px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff914d] text-white rounded-full mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
              En <span className="font-semibold text-[#0966e1]">RUTA ÁGIL GROUP S.A.S</span> nos 
              dedicamos a brindar un servicio de transporte seguro, ágil y confiable. Trabajamos con 
              <span className="font-semibold"> integridad, responsabilidad y respeto</span>, buscando 
              siempre la satisfacción de nuestros clientes. Nuestro objetivo es ser un referente en 
              el sector, generando confianza, <span className="font-semibold">cuidando el medio ambiente 
              y aportando al bienestar de las comunidades con cada viaje que realizamos</span>.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0966e1] text-white rounded-full mb-3">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Seguridad</h3>
                <p className="text-sm text-gray-600">Protección total de sus pertenencias</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full mb-3">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Sostenibilidad</h3>
                <p className="text-sm text-gray-600">Cuidado del medio ambiente</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ff914d] text-white rounded-full mb-3">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Agilidad</h3>
                <p className="text-sm text-gray-600">Servicios rápidos y eficientes</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full mb-3">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Bienestar</h3>
                <p className="text-sm text-gray-600">Compromiso con la comunidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
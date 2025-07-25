import { MapPin, Truck, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function OperationsArea() {
  return (
    <section id="operaciones" className="py-16 bg-[#dbd6d6] w-full overflow-hidden">
      <div className="container px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Área de Operaciones
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desde el área metropolitana de Medellín hacia todo Colombia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#0966e1] text-white rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Área Metropolitana de Medellín
                      </h3>
                      <p className="text-gray-600">
                        Nuestra área de operaciones está inicialmente centrada en el 
                        <span className="font-semibold"> área metropolitana de Medellín</span>, 
                        donde hemos consolidado una base sólida.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#ff914d] text-white rounded-lg">
                      <Truck className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Expansión Nacional
                      </h3>
                      <p className="text-gray-600">
                        Estamos expandiéndonos hacia todo el país, con enfoque en la 
                        <span className="font-semibold"> optimización de rutas, puntualidad, 
                        cuidado y cobertura nacional</span>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-lg">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Expansión Nacional
                      </h3>
                      <p className="text-gray-600">
                        Conectamos personas y negocios en todo Colombia con servicios 
                        confiables y eficientes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-[#0966e1] to-[#0854c7] p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  ¡Súmate a este viaje ágil y eficiente!
                </h3>
                <p className="text-lg mb-6">
                  Conectamos personas y negocios en todo Colombia
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#ff914d] hover:bg-[#e8823d] text-white"
                 onClick={() => {
                   const gallery = document.getElementById('galeria-proyectos');
                   gallery?.scrollIntoView({ behavior: 'smooth' });
                 }}
                >
                  Conocer Más
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Map Visualization */}
            <div className="relative">
              <div className="aspect-square bg-white rounded-2xl shadow-2xl p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#ff914d] to-[#e8823d] rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0966e1] rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Conectamos personas y negocios en todo Colombia
                    </h3>
                    <p className="text-gray-600 mb-4">Base de operaciones</p>
                      ¡Súmate a este viaje ágil y eficiente!
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-[#ff914d] rounded-full"></div>
                        <span className="text-gray-700">Cobertura actual</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-[#0966e1] rounded-full"></div>
                        <span className="text-gray-700">Expansión 2025</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Próximas ciudades</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
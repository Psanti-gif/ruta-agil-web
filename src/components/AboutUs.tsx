import { Users, MapPin, Zap } from "lucide-react";

export function AboutUs() {
  return (
    <section id="quienes-somos" className="py-16 bg-white w-full overflow-hidden">
      <div className="container px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Quiénes Somos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un equipo comprometido y apasionado por brindar soluciones logísticas excepcionales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#ff914d] to-[#e8823d] p-6 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Más de 6 años de experiencia</h3>
                <p className="text-lg leading-relaxed">
                  En RUTA ÁGIL GROUP S.A.S somos un equipo comprometido y apasionado por brindar 
                  soluciones de mudanzas, mensajería y paquetería de forma rápida, segura y confiable.
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Con más de <span className="font-semibold text-[#0966e1]">6 años de experiencia</span> en el sector, 
                comprendemos el valor detrás de cada envío, ya sea un documento urgente, una encomienda especial 
                o el traslado completo de un hogar.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestra misión es <span className="font-semibold text-[#0966e1]">conectar personas y empresas</span>, 
                asegurando que cada servicio se realice con puntualidad, cuidado y total satisfacción. 
                Nos destacamos por ofrecer una atención al cliente cercana y profesional. Contamos con 
                equipo humano capacitado, vehículos propios y aliados estratégicos.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-[#ff914d] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Equipo Experto</h4>
                  <p className="text-sm text-gray-600">Personal capacitado</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-8 w-8 text-[#0966e1] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Servicio Ágil</h4>
                  <p className="text-sm text-gray-600">Respuesta rápida</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Cobertura Nacional</h4>
                  <p className="text-sm text-gray-600">Todo Colombia</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Equipo profesional de RUTA ÁGIL"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#ff914d] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">6+</div>
                  <div className="text-sm">Años de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
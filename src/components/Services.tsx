import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Send, Mail } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Truck,
      title: "Mudanzas",
      description: "Servicios completos de mudanzas residenciales y comerciales con personal especializado y equipos modernos. Contamos con el personal idóneo y capacitado para el cuidado y resguardo de sus bienes.",
      color: "bg-[#0966e1] text-white"
    },
    {
      icon: Package,
      title: "Envíos",
      description: "Envío seguro de paquetes y mercancías a nivel nacional con seguimiento en tiempo real. Garantizamos un servicio de envío seguro y confiable con total responsabilidad.",
      color: "bg-[#ff914d] text-white"
    },
    {
      icon: Send,
      title: "Mensajería",
      description: "Servicio de mensajería express para documentos importantes y paquetes urgentes. Nuestro equipo recibe formación continua y trabaja con total responsabilidad.",
      color: "bg-green-600 text-white"
    },
    {
      icon: Mail,
      title: "Paquetería",
      description: "Manejo especializado de paquetes de todos los tamaños con empaque profesional. Garantizamos un servicio de paquetería seguro y confiable.",
      color: "bg-purple-600 text-white"
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-white w-full overflow-hidden">
      <div className="container px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contamos con el personal idóneo y capacitado para el cuidado y resguardo de sus bienes, 
              garantizando así un servicio de mudanza, envío, mensajería o paquetería seguro y confiable.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Nuestro equipo está compuesto por profesionales altamente capacitados y comprometidos, 
              quienes reciben formación continua para manejar cada envío con atención y responsabilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
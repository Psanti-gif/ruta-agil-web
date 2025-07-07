import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { openWhatsApp, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function Hero() {
  const handleCotizacionClick = () => {
    openWhatsApp(WHATSAPP_MESSAGES.cotizacion);
  };

  return (
    <section id="inicio" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
      ></div>

      <div className="container relative z-10 px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Servicios de Mudanza
            <span className="text-[#ff914d] block">Confiables y Rápidos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
            Mudanzas seguras y asequibles para su hogar y negocio.
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg" 
              onClick={handleCotizacionClick}
              className="bg-[#ff914d] hover:bg-[#e8823d] hover:shadow-xl transition-all duration-300 text-white px-8 py-4 text-lg group"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact Number */}
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Phone className="h-5 w-5 text-[#ff914d]" />
            <span className="font-semibold">301 545 8611</span>
          </div>
        </div>
      </div>
    </section>
  );
}
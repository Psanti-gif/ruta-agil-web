import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export function ContactCTA() {
  const handleWhatsAppClick = () => {
    const message = "Hola, estoy interesado en conocer más sobre los servicios de Ruta Ágil.";
    const whatsappUrl = `https://wa.me/573015458611?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#ff914d] via-[#e8823d] to-[#d4741f] w-full overflow-hidden">
      <div className="container px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para mudarte con confianza?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Obtén tu cotización personalizada y descubre por qué somos la mejor opción
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="bg-white text-[#ff914d] hover:bg-gray-100 hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold group"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Escríbenos por WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="text-orange-100 mt-6 text-lg">
            Respuesta inmediata • Sin compromiso • Atención personalizada
          </p>
        </div>
      </div>
    </section>
  );
}
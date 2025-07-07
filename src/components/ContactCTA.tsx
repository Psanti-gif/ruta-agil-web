import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { openWhatsApp, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function ContactCTA() {
  const handleCotizacionClick = () => {
    openWhatsApp(WHATSAPP_MESSAGES.cotizacion);
  };

  const handleWhatsAppClick = () => {
    openWhatsApp(WHATSAPP_MESSAGES.contacto);
  };

  const handlePhoneClick = () => {
    window.open('tel:+573015458611', '_self');
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleCotizacionClick}
              className="bg-white text-[#ff914d] hover:bg-gray-100 hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold group"
            >
              Cotiza tu mudanza ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center space-x-4">
              <Button 
                size="lg" 
                onClick={handlePhoneClick}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#ff914d] transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                301 545 8611
              </Button>
              
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#ff914d] transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          <p className="text-orange-100 mt-6 text-lg">
            Respuesta inmediata • Sin compromiso • Atención personalizada
          </p>
        </div>
      </div>
    </section>
  );
}
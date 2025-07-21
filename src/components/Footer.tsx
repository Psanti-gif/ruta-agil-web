import { Button } from "@/components/ui/button";
import { Truck, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { openWhatsApp, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function Footer() {
  const handleWhatsAppClick = () => {
    openWhatsApp(WHATSAPP_MESSAGES.contacto);
  };

  return (
    <footer id="contacto" className="bg-gray-900 text-white w-full overflow-hidden">
      <div className="container px-4 py-12 w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo ruta agil.png" 
                alt="RUTA ÁGIL GROUP S.A.S" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empresa líder en servicios de mudanzas, envíos y mensajería con más de 6 años 
              de experiencia. Comprometidos con la excelencia y satisfacción de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                onClick={() => window.open('https://facebook.com/rutaagil', '_blank')}
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-[#ff914d] hover:border-[#ff914d] hover:text-white transition-all duration-300"
                aria-label="Facebook - Ruta Ágil"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                onClick={() => window.open('https://tiktok.com/@rutaagil', '_blank')}
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-[#ff914d] hover:border-[#ff914d] hover:text-white transition-all duration-300"
                aria-label="TikTok - @rutaagil"
              >
                <span className="text-sm font-bold">TT</span>
              </Button>
              <Button 
                size="sm" 
                onClick={handleWhatsAppClick}
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-[#ff914d] hover:border-[#ff914d] hover:text-white transition-all duration-300"
                aria-label="WhatsApp - Contacto directo"
              >
                <span className="text-sm font-bold">WA</span>
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-[#ff914d] hover:border-[#ff914d] hover:text-white transition-all duration-300"
                aria-label="Instagram - Próximamente"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-[#ff914d] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[#ff914d] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#quienes-somos" className="text-gray-300 hover:text-[#ff914d] transition-colors">
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a href="#resenas" className="text-gray-300 hover:text-[#ff914d] transition-colors">
                  Reseñas
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-[#ff914d] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#ff914d]" />
                <a href="tel:+573015458611" className="text-gray-300 hover:text-[#ff914d] transition-colors">
                <span className="text-gray-300">301 545 8611</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#ff914d]" />
                <span className="text-gray-300">info@rutaagil.com.co</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#ff914d] mt-1" />
                <span className="text-gray-300">
                  Medellín, Colombia<br />
                  Servicio a nivel nacional
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 RUTA ÁGIL GROUP S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">
              Facebook: Ruta Ágil
            </span>
            <span className="text-gray-400 text-sm">
              TikTok: @rutaagil
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
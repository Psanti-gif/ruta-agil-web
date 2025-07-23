import { Button } from "@/components/ui/button";
import { Menu, X} from "lucide-react";
import { useState } from "react";
import { openWhatsApp, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCotizaClick = () => {
    openWhatsApp(WHATSAPP_MESSAGES.cotizacion);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 overflow-hidden">
      <div className="container flex h-16 items-center justify-between px-4 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/logo ruta agil.png" 
            alt="RUTA ÁGIL GROUP S.A.S" 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-[#0966e1] transition-colors font-medium">
            Inicio
          </a>
          <a href="#quienes-somos" className="text-gray-700 hover:text-[#0966e1] transition-colors font-medium">
            ¿Quiénes somos?
          </a>
          <a href="#servicios" className="text-gray-700 hover:text-[#0966e1] transition-colors font-medium">
            Servicios
          </a>
          <a href="#resenas" className="text-gray-700 hover:text-[#0966e1] transition-colors font-medium">
            Reseñas
          </a>
          <a href="#contactanos" className="text-gray-700 hover:text-[#0966e1] transition-colors font-medium">
            Contáctenos
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button onClick={handleCotizaClick} className="bg-[#ff914d] hover:bg-[#e8823d] hover:shadow-lg transition-all duration-300 text-white px-6">
            Cotiza tu mudanza
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 bg-white text-black rounded-md border border-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white w-full">
          <nav className="container px-4 py-4 space-y-3">
            <a href="#inicio" className="block py-2 text-gray-700 hover:text-[#0966e1] transition-colors">
              Inicio
            </a>
            <a href="#quienes-somos" className="block py-2 text-gray-700 hover:text-[#0966e1] transition-colors">
              ¿Quiénes somos?
            </a>
            <a href="#servicios" className="block py-2 text-gray-700 hover:text-[#0966e1] transition-colors">
              Servicios
            </a>
            <a href="#resenas" className="block py-2 text-gray-700 hover:text-[#0966e1] transition-colors">
              Reseñas
            </a>
            <a href="#contactanos" className="block py-2 text-gray-700 hover:text-[#0966e1] transition-colors">
              Contáctenos
            </a>
            <div className="pt-2">
              <Button onClick={handleCotizaClick} className="w-full bg-[#ff914d] hover:bg-[#e8823d] hover:shadow-lg transition-all duration-300 text-white">
                Cotiza tu mudanza
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
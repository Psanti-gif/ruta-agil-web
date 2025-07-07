import { Button } from "@/components/ui/button";
import { Menu, X, Truck } from "lucide-react";
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
          <div className="flex items-center justify-center w-10 h-10 bg-[#ff914d] rounded-lg">
            <Truck className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">RUTA ÁGIL</span>
            <span className="text-xs text-gray-600">GROUP S.A.S</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-[#0966e1] transition-colors font-medium">
            Inicio
          </a>
          <a href="#servicios" className="text-gray-700 hover:text-[#0966e1] transition-colors font-medium">
            Servicios
          </a>
          <a href="#nosotros" className="text-gray-700 hover:text-[#0966e1] transition-colors font-medium">
            Nosotros
          </a>
          <a href="#operaciones" className="text-gray-700 hover:text-[#0966e1] transition-colors font-medium">
            Área de operaciones
          </a>
          <a href="#contacto" className="text-gray-700 hover:text-[#0966e1] transition-colors font-medium">
            Contacto
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
          className="md:hidden p-2"
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
            <a href="#servicios" className="block py-2 text-gray-700 hover:text-[#0966e1] transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="block py-2 text-gray-700 hover:text-[#0966e1] transition-colors">
              Nosotros
            </a>
            <a href="#operaciones" className="block py-2 text-gray-700 hover:text-[#0966e1] transition-colors">
              Área de operaciones
            </a>
            <a href="#contacto" className="block py-2 text-gray-700 hover:text-[#0966e1] transition-colors">
              Contacto
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
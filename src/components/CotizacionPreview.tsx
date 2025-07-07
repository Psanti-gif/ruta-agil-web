import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Clock, Shield, Truck, ArrowRight } from "lucide-react";
import { openWhatsApp, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

/**
 * Componente de vista previa para el sistema de cotizaciones
 * 
 * PREPARADO PARA ESCALABILIDAD FUTURA:
 * - Formulario de cotización con campos: origen, destino, tipo de mudanza, fecha, volumen
 * - Integración con EmailJS o Supabase para envío de datos
 * - Cálculo automático de precios basado en distancia y servicios
 * - Validaciones y confirmación de envío
 * - Generación de PDF con cotización
 * - Sistema de seguimiento de solicitudes
 * - Posible escalamiento a SPA con múltiples vistas
 */
export function CotizacionPreview() {
  const handleWhatsAppCotizacion = () => {
    openWhatsApp(WHATSAPP_MESSAGES.cotizacion);
  };

  return (
    <section className="py-16 bg-white w-full overflow-hidden">
      <div className="container px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff914d] text-white rounded-full mb-6">
              <Calculator className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cotización en Línea
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Próximamente: Cotiza tu mudanza en línea. Estamos trabajando en una herramienta 
              para que puedas conocer el valor de tu mudanza en segundos.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-[#dbd6d6] to-gray-100 border-2 border-dashed border-[#ff914d] shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800 flex items-center justify-center gap-2">
                🚧 Próximamente Disponible
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Sistema completo de cotizaciones automáticas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#0966e1] text-white rounded-lg">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Cotización Personalizada
                    </h3>
                    <p className="text-sm text-gray-600">
                      Precios adaptados al tipo y tamaño de tu mudanza
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#ff914d] text-white rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Respuesta Inmediata
                    </h3>
                    <p className="text-sm text-gray-600">
                      Obtén tu cotización en menos de 5 minutos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-lg">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Precios Transparentes
                    </h3>
                    <p className="text-sm text-gray-600">
                      Sin costos ocultos, todo incluido en la cotización
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-lg">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Múltiples Opciones
                    </h3>
                    <p className="text-sm text-gray-600">
                      Diferentes paquetes según tus necesidades
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={handleWhatsAppCotizacion}
                  size="lg" 
                  className="bg-[#ff914d] hover:bg-[#e8823d] hover:shadow-xl transition-all duration-300 text-white px-8 py-4"
                  aria-label="Solicitar cotización por WhatsApp"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Solicitar Cotización por WhatsApp
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  Mientras tanto, puedes contactarnos directamente al <strong>301 545 8611</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
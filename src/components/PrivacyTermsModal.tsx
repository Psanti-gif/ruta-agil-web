import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, FileText, Calendar, Mail, Phone, MapPin } from "lucide-react";

interface PrivacyTermsModalProps {
  children: React.ReactNode;
  defaultTab?: "privacy" | "terms";
}

export function PrivacyTermsModal({ children, defaultTab = "privacy" }: PrivacyTermsModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Shield className="h-6 w-6 text-[#ff914d]" />
            Información Legal - RUTA ÁGIL GROUP S.A.S
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue={defaultTab} className="w-full">
          <div className="flex justify-center px-6 mb-4">
            <TabsList className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-md gap-2 bg-transparent p-1">
              <TabsTrigger 
                value="privacy" 
                className="flex items-center gap-2 data-[state=active]:bg-[#ff914d] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-600 data-[state=inactive]:border data-[state=inactive]:border-gray-300 rounded-md px-4 py-2 transition-all duration-200 hover:bg-gray-50 data-[state=active]:hover:bg-[#e8823d]"
              >
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Políticas de Privacidad</span>
              </TabsTrigger>
              <TabsTrigger 
                value="terms" 
                className="flex items-center gap-2 data-[state=active]:bg-[#ff914d] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-600 data-[state=inactive]:border data-[state=inactive]:border-gray-300 rounded-md px-4 py-2 transition-all duration-200 hover:bg-gray-50 data-[state=active]:hover:bg-[#e8823d]"
              >
                <FileText className="h-4 w-4" />
                <span className="text-sm font-medium">Términos y Condiciones</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <ScrollArea className="h-[70vh] px-6 pb-6">
            <TabsContent value="privacy" className="mt-6">
              <PrivacyPolicy />
            </TabsContent>
            <TabsContent value="terms" className="mt-6">
              <TermsConditions />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm leading-relaxed">
      <div className="bg-gradient-to-r from-[#ff914d] to-[#e8823d] text-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Políticas de Privacidad</h2>
        <p className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Última actualización: Enero 2025
        </p>
      </div>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Información General</h3>
        <p className="text-gray-700 mb-4">
          <strong>RUTA ÁGIL GROUP S.A.S</strong> (en adelante "la Empresa", "nosotros" o "RUTA ÁGIL") 
          se compromete a proteger la privacidad y seguridad de la información personal de nuestros 
          clientes, usuarios y visitantes de nuestro sitio web.
        </p>
        <p className="text-gray-700">
          Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos 
          su información personal de acuerdo con la Ley 1581 de 2012 de Colombia y demás normativas 
          aplicables sobre protección de datos personales.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Responsable del Tratamiento</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold text-gray-900 mb-2">RUTA ÁGIL GROUP S.A.S</p>
          <div className="space-y-1 text-gray-700">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#ff914d]" />
              Área Metropolitana, Medellín, Colombia
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#ff914d]" />
              +57 301 545 8611
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#ff914d]" />
              info@rutaagil.com.co
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Información que Recopilamos</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">3.1 Información Personal</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Nombre completo</li>
              <li>Número de teléfono</li>
              <li>Dirección de correo electrónico</li>
              <li>Dirección física (origen y destino de mudanzas)</li>
              <li>Información sobre servicios solicitados</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">3.2 Información Técnica</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Dirección IP</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>Páginas visitadas en nuestro sitio web</li>
              <li>Tiempo de permanencia en el sitio</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Finalidades del Tratamiento</h3>
        <p className="text-gray-700 mb-3">Utilizamos su información personal para:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Proporcionar servicios de mudanza, envíos, mensajería y paquetería</li>
          <li>Procesar solicitudes de cotización y reservas</li>
          <li>Comunicarnos sobre el estado de sus servicios</li>
          <li>Enviar información promocional (con su consentimiento)</li>
          <li>Mejorar nuestros servicios y experiencia del usuario</li>
          <li>Cumplir con obligaciones legales y regulatorias</li>
          <li>Resolver consultas, quejas y reclamos</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Derechos del Titular</h3>
        <p className="text-gray-700 mb-3">Como titular de datos personales, usted tiene derecho a:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li><strong>Acceder:</strong> Conocer qué información tenemos sobre usted</li>
          <li><strong>Rectificar:</strong> Solicitar corrección de datos inexactos</li>
          <li><strong>Actualizar:</strong> Mantener sus datos actualizados</li>
          <li><strong>Suprimir:</strong> Solicitar eliminación de sus datos</li>
          <li><strong>Revocar:</strong> Retirar el consentimiento otorgado</li>
          <li><strong>Presentar quejas:</strong> Ante la Superintendencia de Industria y Comercio</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Seguridad de la Información</h3>
        <p className="text-gray-700">
          Implementamos medidas técnicas, administrativas y físicas apropiadas para proteger 
          su información personal contra acceso no autorizado, alteración, divulgación o 
          destrucción. Esto incluye el uso de conexiones seguras (SSL), encriptación de datos 
          y acceso restringido a la información.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Compartir Información</h3>
        <p className="text-gray-700">
          No vendemos, alquilamos ni compartimos su información personal con terceros, 
          excepto cuando sea necesario para prestar nuestros servicios (como proveedores 
          de transporte) o cuando la ley lo requiera.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Contacto</h3>
        <p className="text-gray-700 mb-3">
          Para ejercer sus derechos o resolver dudas sobre esta política, contáctenos:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#ff914d]" />
              <strong>Teléfono:</strong> +57 301 545 8611
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#ff914d]" />
              <strong>Email:</strong> info@rutaagil.com.co
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#ff914d]" />
              <strong>Dirección:</strong> Área Metropolitana, Medellín, Colombia
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function TermsConditions() {
  return (
    <div className="space-y-6 text-sm leading-relaxed">
      <div className="bg-gradient-to-r from-[#0966e1] to-[#0854c7] text-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Términos y Condiciones</h2>
        <p className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Última actualización: Enero 2025
        </p>
      </div>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Aceptación de los Términos</h3>
        <p className="text-gray-700">
          Al utilizar los servicios de <strong>RUTA ÁGIL GROUP S.A.S</strong> o acceder a nuestro 
          sitio web, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de 
          acuerdo con alguno de estos términos, no utilice nuestros servicios.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Descripción de Servicios</h3>
        <p className="text-gray-700 mb-3">RUTA ÁGIL GROUP S.A.S ofrece los siguientes servicios:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li><strong>Mudanzas:</strong> Servicios residenciales y comerciales</li>
          <li><strong>Envíos:</strong> Transporte de paquetes y mercancías</li>
          <li><strong>Mensajería:</strong> Entrega de documentos y paquetes urgentes</li>
          <li><strong>Paquetería:</strong> Manejo especializado de diferentes tipos de envíos</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Responsabilidades del Cliente</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">3.1 Información Veraz</h4>
            <p className="text-gray-700">
              El cliente debe proporcionar información completa, exacta y actualizada sobre 
              los servicios requeridos, direcciones, contactos y características de los 
              bienes a transportar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">3.2 Preparación de Bienes</h4>
            <p className="text-gray-700">
              El cliente es responsable de embalar adecuadamente los bienes frágiles y 
              declarar cualquier artículo de valor especial o que requiera manejo especial.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">3.3 Disponibilidad</h4>
            <p className="text-gray-700">
              El cliente debe estar disponible en las direcciones de origen y destino 
              en los horarios acordados.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Responsabilidades de RUTA ÁGIL</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">4.1 Cuidado de Bienes</h4>
            <p className="text-gray-700">
              Nos comprometemos a manejar sus bienes con el máximo cuidado y profesionalismo, 
              utilizando personal capacitado y equipos adecuados.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">4.2 Puntualidad</h4>
            <p className="text-gray-700">
              Nos esforzamos por cumplir con los horarios acordados, aunque factores externos 
              como tráfico o condiciones climáticas pueden afectar los tiempos de entrega.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">4.3 Comunicación</h4>
            <p className="text-gray-700">
              Mantendremos comunicación constante sobre el estado de su servicio y cualquier 
              eventualidad que pueda presentarse.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Limitaciones de Responsabilidad</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">5.1 Artículos Excluidos</h4>
            <p className="text-gray-700 mb-2">No nos hacemos responsables por:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Dinero en efectivo, joyas, documentos legales</li>
              <li>Artículos peligrosos o inflamables</li>
              <li>Plantas, mascotas o seres vivos</li>
              <li>Bienes mal embalados por el cliente</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">5.2 Límites de Indemnización</h4>
            <p className="text-gray-700">
              La responsabilidad por daños está limitada al valor declarado de los bienes 
              o al valor del servicio contratado, lo que sea menor.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Precios y Pagos</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">6.1 Cotizaciones</h4>
            <p className="text-gray-700">
              Las cotizaciones son válidas por 15 días y pueden variar según cambios 
              en las condiciones del servicio.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">6.2 Formas de Pago</h4>
            <p className="text-gray-700">
              Aceptamos pagos en efectivo, transferencias bancarias y otros métodos 
              acordados previamente.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Cancelaciones y Reprogramaciones</h3>
        <p className="text-gray-700">
          Las cancelaciones deben notificarse con al menos 24 horas de anticipación. 
          Las reprogramaciones están sujetas a disponibilidad y pueden generar costos adicionales.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Resolución de Conflictos</h3>
        <p className="text-gray-700">
          Cualquier disputa será resuelta inicialmente mediante diálogo directo. 
          En caso de no llegar a un acuerdo, se someterá a la jurisdicción de los 
          tribunales competentes de Medellín, Colombia.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">9. Modificaciones</h3>
        <p className="text-gray-700">
          RUTA ÁGIL se reserva el derecho de modificar estos términos en cualquier momento. 
          Las modificaciones serán notificadas a través de nuestro sitio web.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">10. Contacto</h3>
        <p className="text-gray-700 mb-3">
          Para consultas sobre estos términos y condiciones:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#0966e1]" />
              <strong>Teléfono:</strong> +57 301 545 8611
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#0966e1]" />
              <strong>Email:</strong> info@rutaagil.com.co
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#0966e1]" />
              <strong>Dirección:</strong> Área Metropolitana, Medellín, Colombia
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
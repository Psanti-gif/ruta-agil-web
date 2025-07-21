import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

// Esquema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  service: z.string().min(1, "Seleccione un tipo de servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Configuración de EmailJS - Reemplazar con tus credenciales reales
      const templateParams = {
        from_name: data.name,
        phone: data.phone,
        service: data.service,
        message: data.message,
        to_name: "RUTA ÁGIL GROUP S.A.S",
      };

      // TODO: Configurar EmailJS con credenciales reales
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   templateParams,
      //   'YOUR_PUBLIC_KEY'
      // );

      // Simulación de envío exitoso para demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      toast.success("¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.");
      reset();
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setSubmitStatus('error');
      toast.error("Error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 bg-gray-50 w-full overflow-hidden">
      <div className="container px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ¿Necesitas una mudanza o tienes alguna pregunta? Estamos aquí para ayudarte.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <p className="text-gray-600">301 545 8611</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Correo Electrónico</p>
                      <p className="text-gray-600">info@rutaagil.com.co</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Dirección</p>
                      <p className="text-gray-600">
                        Área Metropolitana<br />
                        Medellín, Colombia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">Horarios de Atención</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre completo"
                      aria-label="Nombre completo"
                      {...register("name")}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+57 300 123 4567"
                      aria-label="Número de teléfono"
                      {...register("phone")}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="service">Tipo de Servicio *</Label>
                    <Select onValueChange={(value) => register("service").onChange({ target: { value } })}>
                      <SelectTrigger className={errors.service ? "border-red-500" : ""}>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mudanza">Mudanza</SelectItem>
                        <SelectItem value="paqueteria">Paquetería</SelectItem>
                        <SelectItem value="mensajeria">Mensajería</SelectItem>
                        <SelectItem value="envios">Envíos</SelectItem>
                        <SelectItem value="otros">Otros</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos sobre tu mudanza o consulta..."
                      rows={4}
                      aria-label="Mensaje"
                      {...register("message")}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#ff914d] hover:bg-[#e8823d]"
                    disabled={isSubmitting}
                    aria-label="Enviar mensaje de contacto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="flex items-center text-green-600 text-sm">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      ¡Mensaje enviado exitosamente!
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
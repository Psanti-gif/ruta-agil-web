/**
 * Utilidades para integración con WhatsApp
 * Configuración para RUTA ÁGIL GROUP S.A.S
 */

// Número de WhatsApp de la empresa (formato internacional sin +)
export const WHATSAPP_NUMBER = "573015458611"; // Reemplaza con el número real

/**
 * Genera un enlace de WhatsApp con mensaje predefinido
 * @param message - Mensaje personalizado (opcional)
 * @returns URL de WhatsApp
 */
export function generateWhatsAppLink(message?: string): string {
  const defaultMessage = "¡Hola RUTA ÁGIL!  Me interesa solicitar una cotización para mudanza. ¿Podrían ayudarme con información?";

  const finalMessage = message || defaultMessage;
  // Codificación más robusta para WhatsApp
  const encodedMessage = encodeURIComponent(finalMessage)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Abre WhatsApp en una nueva ventana/pestaña
 * @param message - Mensaje personalizado (opcional)
 */
export function openWhatsApp(message?: string): void {
  const link = generateWhatsAppLink(message);
  window.open(link, '_blank', 'noopener,noreferrer');
}

/**
 * Mensajes predefinidos para diferentes tipos de consulta
 */
export const WHATSAPP_MESSAGES = {
  cotizacion: "¡Hola RUTA ÁGIL!  Me interesa solicitar una cotización para mudanza. ¿Podrían ayudarme con información?",

  servicios: "¡Hola!  Me gustaría conocer más información sobre los servicios de RUTA ÁGIL GROUP S.A.S. ¿Podrían contarme sobre tipos de mudanza, servicios de envío y cobertura? ¡Gracias!",

  contacto: "¡Hola RUTA ÁGIL!  Me gustaría ponerme en contacto para conocer más sobre sus servicios de mudanza y logística. ¡Espero su respuesta!",

  urgente: "¡Hola! Necesito una mudanza URGENTE. ¿Tienen disponibilidad? Por favor confirmen lo antes posible. ¡Gracias!"
};
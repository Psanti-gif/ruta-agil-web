/**
 * Utilidades para integración con WhatsApp
 * Configuración para RUTA ÁGIL GROUP S.A.S
 */

// Número de WhatsApp de la empresa (formato internacional sin +)
export const WHATSAPP_NUMBER = "573015458611";

/**
 * Genera un enlace de WhatsApp con mensaje predefinido
 * @param message - Mensaje personalizado (opcional)
 * @returns URL de WhatsApp
 */
export function generateWhatsAppLink(message?: string): string {
  const defaultMessage = "¡Hola RUTA ÁGIL! Me interesa solicitar una cotización para mudanza. ¿Podrían ayudarme con información?";

  const finalMessage = message || defaultMessage;
  // Usar la URL exacta proporcionada para el mensaje predeterminado
  if (!message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=%C2%A1Hola%20RUTA%20%C3%81GIL!%20Me%20interesa%20solicitar%20una%20cotizaci%C3%B3n%20para%20mudanza.%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20informaci%C3%B3n%3F`;
  }
  
  // Para mensajes personalizados, usar codificación estándar
  const encodedMessage = encodeURIComponent(finalMessage);
  
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
  cotizacion: "¡Hola RUTA ÁGIL! Me interesa solicitar una cotización para mudanza. ¿Podrían ayudarme con información?",

  servicios: "¡Hola RUTA ÁGIL! Me interesa solicitar una cotización para mudanza. ¿Podrían ayudarme con información?",

  contacto: "¡Hola RUTA ÁGIL! Me interesa solicitar una cotización para mudanza. ¿Podrían ayudarme con información?",

  urgente: "¡Hola RUTA ÁGIL! Me interesa solicitar una cotización para mudanza. ¿Podrían ayudarme con información?"
};
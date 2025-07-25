# RUTA ÁGIL GROUP S.A.S - Landing Page Profesional

Landing page moderna y completamente funcional para empresa de mudanzas desarrollada con React, TypeScript, Tailwind CSS y ShadCN/ui.

## 🎨 Diseño y Colores Corporativos

### Paleta de Colores
- **Color Primario (CTA)**: `#ff914d` - Naranja corporativo para botones y elementos destacados
- **Color Acento**: `#0966e1` - Azul para enlaces y detalles
- **Fondo Neutro**: `#dbd6d6` - Gris claro para secciones alternadas
- **Texto Principal**: Grises oscuros para máxima legibilidad

### Tipografía
- Sans-serif moderna y profesional
- Jerarquía visual clara con tamaños diferenciados
- Espaciado optimizado para legibilidad

## 🚀 Características Principales

- **Diseño Responsivo**: Mobile-first, optimizado para todos los dispositivos
- **SEO Optimizado**: Meta tags completos y estructura semántica
- **Accesibilidad**: Navegación por teclado y etiquetas ARIA
- **Componentes Modulares**: Arquitectura escalable con ShadCN/ui
- **Sistema de Contacto Funcional**: PHPMailer con SMTP auténtico
- **Favicon Corporativo**: Logo de RUTA ÁGIL en pestañas del navegador
- **Zona Horaria Colombia**: Timestamps correctos en correos

## 📋 Secciones Implementadas

### 1. **Header Fijo**
- Logo corporativo de RUTA ÁGIL
- Navegación responsive con menú hamburguesa
- Botón CTA destacado con integración WhatsApp
- Sticky navigation para mejor UX

### 2. **Hero Principal**
- Imagen de fondo profesional de Pexels
- Título impactante con colores corporativos
- Botón de cotización con efectos hover
- Teléfono de contacto directo: **301 545 8611**
- Integración completa con WhatsApp

### 3. **Experiencia**
- Destacar 6+ años de experiencia
- Fondo con color corporativo neutro
- Mensaje de profesionalismo y confianza

### 4. **Servicios**
- Grid responsive de 4 servicios principales:
  - 🚛 **Mudanzas**: Residenciales y comerciales
  - 📦 **Envíos**: Paquetes y mercancías nacionales
  - 📨 **Mensajería**: Express y documentos urgentes
  - 📮 **Paquetería**: Manejo especializado
- Cards con iconos Lucide y descripciones detalladas
- Efectos hover suaves y animaciones

### 5. **Misión Corporativa**
- Texto corporativo completo y profesional
- Valores destacados con iconos:
  - 🛡️ Seguridad
  - 🌱 Sostenibilidad
  - 🎯 Agilidad
  - ❤️ Bienestar
- Fondo neutro corporativo

### 6. **¿Quiénes Somos?**
- Historia de la empresa (6+ años)
- Imagen profesional de equipo
- Estadísticas destacadas
- Valores corporativos visuales

### 7. **Área de Operaciones**
- Cobertura desde Medellín hacia Colombia
- Mapa visual de operaciones
- Expansión nacional planificada
- Call-to-action motivacional

### 8. **Reseñas de Clientes**
- Carrusel de testimonios reales
- Sistema de navegación con puntos
- Reseñas auténticas con calificaciones
- Estadísticas de satisfacción

### 9. **Sistema de Cotizaciones (Preview)**
- Sección preparada para funcionalidad futura
- Documentación para escalabilidad
- Integración temporal con WhatsApp
- Diseño profesional con iconos

### 10. **Call-to-Action Principal**
- Sección destacada con gradiente corporativo
- Botón WhatsApp prominente
- Mensaje motivacional
- Información de contacto directo

### 11. **Galería de Proyectos**
- Carrusel horizontal responsive
- 6 proyectos de ejemplo configurables
- Navegación desktop y mobile
- Estadísticas de proyectos completados
- **Instrucciones claras** para reemplazar imágenes

### 12. **Formulario de Contacto Funcional**
- **Sistema PHPMailer completamente operativo**
- Validación con Zod y React Hook Form
- Campos: nombre, email (opcional), teléfono, servicio, mensaje
- **Envío directo a bandeja de entrada** (sin spam)
- Notificaciones toast con Sonner
- Información de contacto completa
- Horarios de atención detallados

### 13. **Footer Completo**
- Información corporativa
- Enlaces a redes sociales:
  - Facebook: Ruta Ágil
  - TikTok: @rutaagil
  - WhatsApp: Integración directa
  - Instagram: ruta_mudanzas_envios
- Datos de contacto completos
- Copyright y enlaces legales

## 🛠️ Tecnologías

- **React 18** con TypeScript
- **Vite** como bundler y dev server
- **Tailwind CSS** para estilos
- **ShadCN/ui** para componentes
- **Lucide React** para iconos
- **React Hook Form** + **Zod** para validaciones
- **PHPMailer** para envío de correos
- **Sonner** para notificaciones

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🌐 Despliegue en Hostinger

### Archivos de Producción Incluidos:

#### 📧 **Sistema de Correo PHPMailer**
- `public/contact-phpmailer.php` - **Sistema principal funcional**
- `public/contact.php` - Alternativa con mail() nativo
- `public/phpmailer-contact.php` - Plantilla de configuración
- `public/test-phpmailer.php` - Herramienta de diagnóstico
- `public/debug-phpmailer.php` - Diagnóstico detallado

#### ⚙️ **Configuración SMTP Optimizada**
```php
// Configuración para Hostinger
$mail->Host = 'smtp.hostinger.com';
$mail->Username = 'info@rutaagil.com.co';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
$mail->Port = 465; // Puerto optimizado
```

### Pasos para Despliegue:

1. **Construir el proyecto**:
   ```bash
   npm run build
   ```

2. **Subir archivos**:
   - Subir todo el contenido de `dist/` al directorio público
   - Verificar que `index.html` esté en la raíz
   - Confirmar que `logo ruta agil.png` esté en `/public/`

3. **Configurar PHPMailer**:
   - PHPMailer ya está incluido en `/public/PHPMailer/`
   - Actualizar contraseña en `contact-phpmailer.php`
   - El sistema está listo para funcionar

4. **Verificar funcionalidad**:
   - Probar formulario de contacto
   - Confirmar recepción de correos
   - Verificar favicon corporativo

## ✨ Funcionalidades Avanzadas

### 🎯 **Sistema de Contacto Profesional**
- **PHPMailer con SMTP auténtico** (Hostinger optimizado)
- **Puerto 465 SSL** para máxima seguridad
- **Zona horaria Colombia** configurada
- **Headers profesionales** anti-spam
- **Validaciones robustas** frontend y backend
- **Notificaciones en tiempo real**

### 📱 **Integración WhatsApp Completa**
- **Mensajes predefinidos** por tipo de consulta
- **Enlaces optimizados** con codificación correcta
- **Botones CTA** en múltiples secciones
- **Número corporativo**: 301 545 8611


### 🎨 **Branding Corporativo Completo**
- **Favicon** con logo de RUTA ÁGIL
- **Colores consistentes** en toda la aplicación
- **Tipografía profesional** optimizada
- **Efectos hover** y micro-interacciones

## 🔮 Preparación para Escalabilidad Futura

### Sistema de Cotizaciones Automáticas (Próxima Fase)
El componente `CotizacionPreview` está preparado para:

- **Formulario dinámico** con campos:
  - Origen y destino con autocompletado
  - Tipo de mudanza (residencial/comercial)
  - Fecha programada con calendario
  - Volumen estimado con calculadora
  - Servicios adicionales (embalaje, seguro, etc.)

- **Integraciones planificadas**:
  - **Supabase** para base de datos de cotizaciones
  - **Cálculo automático** basado en distancia y servicios
  - **Generación de PDF** con cotización detallada
  - **Sistema de seguimiento** con estados
  - **Panel de administración** para gestión

- **Escalamiento a SPA completa**:
  - **React Router** para múltiples vistas
  - **Dashboard administrativo** con métricas
  - **Sistema de usuarios** y autenticación
  - **Gestión de cotizaciones** en tiempo real
  - **Reportes y analytics** integrados

### Funcionalidades Técnicas Preparadas
- **Arquitectura modular** escalable
- **Sistema de colores** centralizado
- **Componentes reutilizables** con ShadCN/ui
- **Responsive design** completo
- **SEO optimizado** para crecimiento
- **Accesibilidad** implementada
- **Performance optimizado**

## 📊 Métricas y Estadísticas

### 🎯 **Datos Corporativos Destacados**
- **6+ años** de experiencia
- **100+** proyectos completados
- **100%** clientes satisfechos
- **Cobertura nacional** desde Medellín

### 📱 **Redes Sociales Integradas**
- **Facebook**: Ruta Ágil
- **TikTok**: @rutaagil
- **WhatsApp**: 301 545 8611
- **Instagram**: ruta_mudanzas_envios
- **Email**: info@rutaagil.com.co

## 🔧 Configuración Técnica

### Variables de Entorno
```env
# No se requieren variables de entorno
# Todo está configurado directamente en los archivos PHP
```

### Estructura de Archivos
```
public/
├── contact-phpmailer.php     # Sistema principal de contacto
├── PHPMailer/               # Librería PHPMailer completa
├── logo ruta agil.png       # Logo corporativo
└── images/                  # Galería de proyectos (configurar)

src/
├── components/              # Componentes React modulares
├── lib/                     # Utilidades (WhatsApp, etc.)
└── hooks/                   # Hooks personalizados
```

## 🎯 Próximos Pasos Recomendados

### Corto Plazo (1-2 meses)
1. **Actualizar galería** con fotos reales de proyectos
2. **Agregar más testimonios** de clientes
3. **Implementar Google Analytics** para métricas
4. **Optimizar imágenes** para mejor performance
5. **Configurar Google My Business**

### Mediano Plazo (3-6 meses)
1. **Desarrollar sistema completo** de cotizaciones
2. **Implementar blog** con consejos de mudanza
3. **Agregar chat en vivo** con WhatsApp Business
4. **Crear landing pages** específicas por servicio
5. **Implementar sistema de seguimiento** de envíos

### Largo Plazo (6+ meses)
1. **Panel de administración** completo
2. **App móvil** para clientes
3. **Sistema de facturación** integrado
4. **Marketplace** de servicios adicionales
5. **Expansión a otras ciudades**

## 📞 Información de Contacto

- **Teléfono**: 301 545 8611
- **Email**: info@rutaagil.com.co
- **Ubicación**: Medellín, Colombia
- **Cobertura**: Nacional
- **Sitio Web**: rutaagil.com.co

## 📄 Licencia

Este proyecto está desarrollado exclusivamente para **RUTA ÁGIL GROUP S.A.S**. Todos los derechos reservados.

---

**Desarrollado con ❤️ para RUTA ÁGIL GROUP S.A.S - Conectando personas y empresas en Colombia** 🇨🇴

*Última actualización: Julio 2025*
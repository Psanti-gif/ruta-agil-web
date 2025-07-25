import { useState } from "react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

/**
 * GALERÍA DE PROYECTOS - RUTA ÁGIL GROUP S.A.S
 * 
 * Carrusel horizontal responsive para mostrar trabajos realizados
 * 
 * INSTRUCCIONES PARA REEMPLAZAR IMÁGENES:
 * 1. Subir imágenes a la carpeta /public/images/
 * 2. Nombrar como: proyecto1.jpg, proyecto2.jpg, etc.
 * 3. Modificar el array 'projects' abajo con las rutas correctas
 * 4. Actualizar títulos y descripciones según corresponda
 */

// 📸 CONFIGURACIÓN DE PROYECTOS - MODIFICAR AQUÍ PARA CAMBIAR IMÁGENES
const projects = [
  {
    id: 1,
    title: "Mudanza Residencial Completa",
    description: "Traslado seguro de hogar familiar en Medellín",
    image: "/images/1.jpg", // ⬅️ CAMBIAR ESTA RUTA
    category: "Residencial"
  },
  {
    id: 2,
    title: "Mudanza Comercial Oficina",
    description: "Reubicación de oficina empresarial",
    image: "/images/2.jpg", // ⬅️ CAMBIAR ESTA RUTA
    category: "Comercial"
  },
  {
    id: 3,
    title: "Envío Especializado",
    description: "Transporte de equipos delicados",
    image: "/images/3.jpg", // ⬅️ CAMBIAR ESTA RUTA
    category: "Envíos"
  },
  {
    id: 4,
    title: "Mudanza Apartamento",
    description: "Traslado eficiente en el área metropolitana",
    image: "/images/4.jpg", // ⬅️ CAMBIAR ESTA RUTA
    category: "Residencial"
  },
  {
    id: 5,
    title: "Paquetería Express",
    description: "Entrega rápida y segura",
    image: "/images/5.jpg", // ⬅️ CAMBIAR ESTA RUTA
    category: "Paquetería"
  },
];

export function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : 3; // 1 en móvil, 3 en desktop
    }
    return 3;
  };
  
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  // Actualizar itemsPerView cuando cambie el tamaño de pantalla
  React.useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      // Ajustar currentIndex si es necesario
      const newMaxIndex = Math.max(0, projects.length - newItemsPerView);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section id="galeria-proyectos" className="py-16 bg-gray-50 w-full overflow-hidden">
      <div className="container px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header de la sección */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff914d] text-white rounded-full mb-6">
              <Camera className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galería de Proyectos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce algunos de nuestros trabajos realizados con éxito para clientes satisfechos
            </p>
          </div>

          {/* Carrusel Container */}
          <div className="relative">
            {/* Botones de navegación - Desktop */}
            <div className="hidden md:block">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="sm"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-gray-300 shadow-lg"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                onClick={nextSlide}
                variant="outline"
                size="sm"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-gray-300 shadow-lg"
                disabled={currentIndex >= maxIndex}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Carrusel de proyectos */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out md:gap-2"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                }}
              >
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    className="w-full md:w-1/3 flex-shrink-0 px-1 md:px-2"
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {/* Placeholder para imagen - REEMPLAZAR CON IMÁGENES REALES */}
                        <div 
                          className="w-full h-full bg-gradient-to-br from-[#ff914d] to-[#e8823d] flex items-center justify-center"
                          style={{
                            backgroundImage: `url('${project.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                        
                        </div>
                        
                        {/* Overlay con categoría */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0966e1] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores de navegación - Mobile */}
            <div className="flex justify-center items-center space-x-4 mt-8 md:hidden">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="sm"
                className="border-[#ff914d] text-[#ff914d] hover:bg-[#ff914d] hover:text-white"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: projects.length }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[#ff914d]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextSlide}
                variant="outline"
                size="sm"
                className="border-[#ff914d] text-[#ff914d] hover:bg-[#ff914d] hover:text-white"
                disabled={currentIndex >= projects.length - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Indicadores de puntos - Desktop */}
            <div className="hidden md:flex justify-center space-x-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#ff914d]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Estadística adicional */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-[#ff914d] mb-2">1500+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-[#0966e1] mb-2">6+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
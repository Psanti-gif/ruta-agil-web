import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const reviews = [
  {
    name: "Carolina",
    location: "Belén La Gloria",
    rating: 5,
    comment: "Gracias. Todo excelente 🙏🏻",
    service: "Mudanza"
  },
  {
    name: "Juan David",
    location: "La América",
    rating: 5,
    comment: "Excelente servicio, me fue muy bien.",
    service: "Envío"
  },
  {
    name: "Alexis Franco",
    location: "Sabaneta",
    rating: 5,
    comment: "Muy bien. Excelente servicio. Muchas gracias por prestarnos el servicio y en tan pronto tiempo.",
    service: "Mudanza"
  },
  {
    name: "Gabriel Jaime",
    location: "Floresta",
    rating: 5,
    comment: "Excelente servicio y responsables con el cuidado de los enseres. Personas muy amables.",
    service: "Mudanza"
  },
  {
    name: "Daniel Menjívar",
    location: "Laureles",
    rating: 5,
    comment: "Excelente. Quedé muy contento. Súper recomendados.",
    service: "Paquetería"
  },
  {
    name: "Jhon",
    location: "Bello",
    rating: 5,
    comment: "¡Excelente! Muy amables!! 🙏",
    service: "Mensajería"
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const getCurrentReviews = () => {
    const startIndex = currentIndex * reviewsPerPage;
    return reviews.slice(startIndex, startIndex + reviewsPerPage);
  };

  return (
    <section id="resenas" className="py-16 bg-white w-full overflow-hidden">
      <div className="container px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reseñas de Nuestros Clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>

          <div className="relative">
            {/* Reviews Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {getCurrentReviews().map((review, index) => (
                <Card key={`${currentIndex}-${index}`} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "{review.comment}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-900">{review.name}</p>
                          <p className="text-sm text-gray-600">{review.location}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-[#ff914d] text-white text-xs px-2 py-1 rounded-full">
                            {review.service}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-4">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="sm"
                className="border-[#ff914d] text-[#ff914d] hover:bg-[#ff914d] hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
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
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gradient-to-br from-[#ff914d] to-[#e8823d] rounded-2xl text-white">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-lg">Clientes Satisfechos</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0966e1] to-[#0854c7] rounded-2xl text-white">
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-lg">Años de Experiencia</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl text-white">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-lg">Mudanzas Exitosas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Award } from "lucide-react";

export function Experience() {
  return (
    <section className="py-16 bg-[#dbd6d6] w-full overflow-hidden">
      <div className="container px-4 w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0966e1] text-white rounded-full mb-6">
            <Award className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Experiencia y Profesionalismo
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Con 6 años de experiencia en la industria de mudanzas, nuestro equipo de 
            profesionales está capacitado para manejar cualquier situación. Nos enorgullece 
            ofrecer un servicio de alta calidad que supera las expectativas de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
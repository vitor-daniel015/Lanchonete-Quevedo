import { Star } from 'lucide-react';

// Interface para um item de especialidade
interface Specialty {
  name: string;
  description: string;
  price: string;
  image: string;
}

// Interface para as props do componente Specialties
interface SpecialtiesProps {
  specialties: Specialty[];
}

function Specialties({ specialties }: SpecialtiesProps) {
  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-800 mb-6">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Pratos típicos preparados com receitas tradicionais e ingredientes selecionados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <div key={index} className="bg-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif text-amber-800 mb-2">{item.name}</h3>
                <p className="text-amber-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">{item.price}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specialties;
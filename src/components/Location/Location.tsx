import { MapPin, Clock, Phone } from 'lucide-react';

function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-800 mb-6">
            Onde Nos Encontrar
          </h2>
          <p className="text-lg text-amber-700">
            Venha nos visitar em Capela do Alto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-8 w-8 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Endereço</h3>
                <p className="text-amber-700">
                  Rod. Ver. João Antônio Nunes<br />
                  Centro - Capela do Alto, SP<br />
                  CEP: 18195-000
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-8 w-8 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Horário de Funcionamento</h3>
                <div className="text-amber-700">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 16h</p>
                  <p>Domingo: 8h às 14h</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-8 w-8 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Contato</h3>
                <p className="text-amber-700">
                  Telefone: (15) 3267-1234<br />
                  WhatsApp: (15) 99999-9999
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-100 rounded-2xl p-8 text-center">
            <div className="w-full h-72 bg-amber-200 rounded-xl flex items-center justify-center">
              <iframe
                className='w-full h-full rounded-xl'
                width="500px"
                height="450px"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/search?q=bar%20do%20nene%20-%20Capela%20do%20Alto&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
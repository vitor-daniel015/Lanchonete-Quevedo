import { Instagram } from 'lucide-react';

function InstagramFeed() {
  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-800 mb-6">
            Siga-nos no Instagram
          </h2>
          <p className="text-lg text-amber-700">
            Veja as últimas novidades e pratos especiais
          </p>
        </div>
        <div className="w-full rounded-xl page-container h-[430px] md:h-80  lg:h-[620px] mb-10">
          <iframe
            className='grid grid-cols-2 md:grid-cols-4 gap-4'
            src="https://widget.tagembed.com/295382?website=1"
            style={{
              width: "100%",
              height: "100%",
              overflow: "auto",
              border: "none"
            }}
            title="Tagembed Widget"
          />
        </div>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
            <Instagram className="h-5 w-5" />
            <a href="https://www.instagram.com/quevedos_lanchonete" target="_blank" rel="noopener noreferrer">
              @quevedos_lanchonete
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default InstagramFeed;
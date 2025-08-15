import { NotebookPen, Phone } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 drop-shadow-lg">
          Quevedo's Lanchonete
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto">
          Sabores autênticos do interior paulista em Capela do Alto.
          Pamonha, sopa de milho e delícias caipiras feitas com carinho.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
            <NotebookPen className="h-5 w-5" />
            Peça Agora
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="h-5 w-5" />
            WhatsApp
          </button>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Ligue Agora
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
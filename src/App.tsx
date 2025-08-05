import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Clock, Star, Instagram, Facebook, ChefHat, NotebookPen } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specialties = [
    {
      name: "Pamonha Tradicional",
      description: "Pamonha cremosa feita com milho fresco e temperos especiais, envolvida na palha do milho",
      price: "R$ 8,00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXe18LGdn5MjL9jeruNC3amP0YI4BdE-uS5MZwyt3kcG01byVtrjj0j_umJqWqRV-TlZ4&usqp=CAU"
    },
    {
      name: "Sopa de Milho",
      description: "Sopa cremosa de milho verde com pedaços de frango caipira e temperos da casa",
      price: "R$ 12,00",
      image: "https://static.itdg.com.br/images/1200-630/2434e5b8e20dd57576bcb61e07f25841/sopa-de-milho.jpg"
    },
    {
      name: "Bolinho Caipira",
      description: "Bolinhos crocantes de milho com queijo mineiro, fritos na hora",
      price: "R$ 6,00",
      image: "https://scontent.fsod1-2.fna.fbcdn.net/v/t1.6435-9/167165029_4608054062555040_6036292343188839117_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=iPVKuYt7ZYoQ7kNvwHtjjvh&_nc_oc=AdkAeQ68HznEqyl-WbDUBW4DrSR7t5F5-5XE3yJa9TZL0LzZzbJuNssZEQmbXkKxmjE&_nc_zt=23&_nc_ht=scontent.fsod1-2.fna&_nc_gid=p67KExWgLd0h4REitIGh-g&oh=00_AfVZqHgtNExIAQiHWgQ9q86HcxodBuvKNsbGjs-MNkJM2g&oe=68B9C52D"
    },
    {
      name: "Pastel Caipira",
      description: "Pastel artesanal recheado com frango caipira, queijo e temperos especiais",
      price: "R$ 10,00",
      image: "https://static.tvgazeta.com.br/uploads/2019/06/WhatsApp-Image-2019-06-05-at-11.54.36.jpeg"
    }
  ];

  const menuItems = [
    { category: "Especialidades", items: specialties },
    {
      category: "Bebidas",
      items: [
        { name: "Café Coado", description: "Café fresco passado na hora", price: "R$ 4,00" },
        { name: "Suco de Milho", description: "Suco natural de milho verde", price: "R$ 6,00" },
        { name: "Água de Coco", description: "Água de coco gelada", price: "R$ 5,00" },
        { name: "Refrigerante", description: "Coca-Cola, Guaraná, Fanta", price: "R$ 4,50" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 opacity-0 pointer-events-auto ${scrolled ? 'bg-amber-100 shadow-lg opacity-100' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src="/images/logo2.png" alt="Logo" className='h-8 w-32' />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-primary hover:text-yellow-600 transition-colors font-semibold">Início</a>
              <a href="#specialties" className="text-primary hover:text-yellow-600 transition-colors font-semibold">Especialidades</a>
              <a href="#menu" className="text-primary hover:text-yellow-600 transition-colors font-semibold">Cardápio</a>
              <a href="#location" className="text-primary hover:text-yellow-600 transition-colors font-semibold">Localização</a>
              <a href="#delivery" className="text-primary hover:text-yellow-600 transition-colors font-semibold">Delivery</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-amber-800 hover:text-yellow-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-amber-100 border-t border-amber-200">
              <div className="py-4 space-y-2">
                <a href="#home" className="block px-4 py-2 text-amber-800 hover:text-yellow-600 transition-colors">Início</a>
                <a href="#specialties" className="block px-4 py-2 text-amber-800 hover:text-yellow-600 transition-colors">Especialidades</a>
                <a href="#menu" className="block px-4 py-2 text-amber-800 hover:text-yellow-600 transition-colors">Cardápio</a>
                <a href="#location" className="block px-4 py-2 text-amber-800 hover:text-yellow-600 transition-colors">Localização</a>
                <a href="#delivery" className="block px-4 py-2 text-amber-800 hover:text-yellow-600 transition-colors">Delivery</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-800 mb-6">
              Tradição e Sabor
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Há anos servindo as melhores comidas típicas de Capela do Alto. Nossa lanchonete
              é um pedacinho do interior paulista, onde cada prato é preparado com ingredientes
              frescos e muito amor pela tradição culinária caipira.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
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

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-b from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-800 mb-6">
              Cardápio Completo
            </h2>
            <p className="text-lg text-amber-700">
              Conheça todos os nossos sabores autênticos
            </p>
          </div>

          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-3xl font-bold font-serif text-amber-800 mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-amber-800">{item.name}</h4>
                      <span className="text-xl font-bold text-red-600">{item.price}</span>
                    </div>
                    <p className="text-amber-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
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

      {/* Delivery Section */}
      {/* < section id="delivery" className="py-20 bg-gradient-to-b from-amber-50 to-yellow-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-800 mb-6">
              Delivery
            </h2>
            <p className="text-lg text-amber-700">
              Levamos nossos sabores até você
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-800 mb-6">
              Atendemos Capela do Alto e Região
            </h3>
            <p className="text-amber-700 mb-8 text-lg">
              Faça seu pedido pelo WhatsApp ou telefone. Taxa de entrega a partir de R$ 3,00.
              Pedido mínimo de R$ 20,00 para delivery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 p-6 rounded-xl">
                <h4 className="font-bold text-amber-800 mb-2">Tempo de Entrega</h4>
                <p className="text-amber-700">30 a 45 minutos</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <h4 className="font-bold text-amber-800 mb-2">Formas de Pagamento</h4>
                <p className="text-amber-700">Dinheiro, PIX, Cartão</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <img src="/images/whatsapp.png" alt="WhatsApp" className="h-5 w-5" />
                Pedir pelo WhatsApp
              </button>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Ligar Agora
              </button>
            </div>
          </div>
        </div>
      </section > */}

      {/* Instagram Feed Section */}
      < section className="py-20 bg-white" >
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
      </section >

      {/* Footer */}
      < footer className="bg-amber-800 text-white py-12" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-8 w-8 text-yellow-400" />
                <span className="text-2xl font-bold font-serif">Quevedo's Lanchonete</span>
              </div>
              <p className="text-amber-200">
                Sabores autênticos do interior paulista desde sempre.
                Tradição e qualidade em cada prato.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-2 text-amber-200">
                <p>Telefone: (15) 3267-1234</p>
                <p>WhatsApp: (15) 99999-9999</p>
                <p>Rua Principal, 123 - Centro</p>
                <p>Capela do Alto, SP</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <button className="bg-amber-700 hover:bg-amber-600 p-3 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="bg-amber-700 hover:bg-amber-600 p-3 rounded-full transition-colors">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="bg-amber-700 hover:bg-amber-600 p-3 rounded-full transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2025 Quevedo's Lanchonete. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer >
    </div >
  );
}

export default App;
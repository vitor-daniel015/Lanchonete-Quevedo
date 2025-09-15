import { useState, useEffect } from 'react';

import NavBar from './components/Navbar.tsx';
import Hero from './components/Hero/Hero.tsx';
import About from './components/About/About.tsx';
import Specialties from './components/Specialties/Specialties.tsx';
import Menu from './components/Menu/Menu.tsx';
import Location from './components/Location/Location.tsx';
import InstagramFeed from './components/InstagramFeed/InstagramFeed.tsx';
import Footer from './components/Footer.tsx';
// import Timeline from './components/Timeline/Timeline.tsx';

// Interfaces para tipagem dos dados
interface Specialty {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specialties: Specialty[] = [
    {
      name: "Pamonha Tradicional",
      description: "Pamonha cremosa feita com milho fresco e temperos especiais, envolvida na palha do milho",
      price: "R$ 8,00",
      image: "/images/Comidas/pamonha.jpg"
    },
    {
      name: "Sopa de Milho",
      description: "Sopa cremosa de milho verde com frango caipira e temperos da casa",
      price: "R$ 12,00",
      image: "/images/Comidas/sopaCompleta.jpg"
    },
    {
      name: "Bolinho Caipira",
      description: "Bolinhos crocantes de milho com queijo mineiro, fritos na hora",
      price: "R$ 6,00",
      image: "https://img.cybercook.com.br/receitas/562/bolinho-de-bacalhau-facil-2.jpeg"
    },
    {
      name: "Pastel Caipira",
      description: "Pastel artesanal recheado com frango caipira, queijo e temperos especiais",
      price: "R$ 10,00",
      image: "https://static.tvgazeta.com.br/uploads/2019/06/WhatsApp-Image-2019-06-05-at-11.54.36.jpeg"
    },
    // { 
    //   name: "Café Coado", 
    //   description: "Café fresco passado na hora", 
    //   price: "R$ 4,00" ,
    //   image: "https://static.tvgazeta.com.br/uploads/2019/06/WhatsApp-Image-2019-06-05-at-11.54.36.jpeg"
    // },
    // { 
    //   name: "Suco de Milho", 
    //   description: "Suco natural de milho verde", 
    //   price: "R$ 6,00" ,
    //   image: "https://static.tvgazeta.com.br/uploads/2019/06/WhatsApp-Image-2019-06-05-at-11.54.36.jpeg"
    // },
    // { 
    //   name: "Água de Coco", 
    //   description: "Água de coco gelada", 
    //   price: "R$ 5,00" ,
    //   image: "https://static.tvgazeta.com.br/uploads/2019/06/WhatsApp-Image-2019-06-05-at-11.54.36.jpeg"
    // },
    // { 
    //   name: "Refrigerante", 
    //   description: "Coca-Cola, Guaraná, Fanta", 
    //   price: "R$ 4,50" ,
    //   image: "https://static.tvgazeta.com.br/uploads/2019/06/WhatsApp-Image-2019-06-05-at-11.54.36.jpeg"
    // }
  ];

  const menuItems: MenuCategory[] = [
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
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />
      <Hero />
      <About />
      <Specialties specialties={specialties} />
      {/* <Timeline /> */}
      <Menu menuItems={menuItems} />
      <Location />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

export default App;
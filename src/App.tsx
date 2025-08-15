import { useState, useEffect } from 'react';

import NavBar from './components/Navbar.tsx';
import Hero from './components/Hero/Hero.tsx';
import About from './components/About/About.tsx';
import Specialties from './components/Specialties/Specialties.tsx';
import Menu from './components/Menu/Menu.tsx';
import Location from './components/Location/Location.tsx';
import InstagramFeed from './components/InstagramFeed/InstagramFeed.tsx';
import Footer from './components/Footer.tsx';

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
      image: "https://scontent.fsod1-2.fna.fbcdn.net/v/t1.6435-9/167165029_4608054062555040_6036292343188839117_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=iPVKuYt7ZYoQ7kNvwHtjjvh&_nc_oc=AdkAeQ68HznEqyl-WbDUBW4DrSR7t5F5-5XE3yJa9TZL0LzZzbJuNssZEQmbXkKxmjE&_nc_zt=23&_nc_ht=scontent.fsod1-2.fna&_nc_gid=p67KExWgLd0h4REitIGh-g&oh=00_AfVZqHgtNExIAQiHWgQ9q86HcxodBuvKNsbJg&oe=68B9C52D"
    },
    {
      name: "Pastel Caipira",
      description: "Pastel artesanal recheado com frango caipira, queijo e temperos especiais",
      price: "R$ 10,00",
      image: "https://static.tvgazeta.com.br/uploads/2019/06/WhatsApp-Image-2019-06-05-at-11.54.36.jpeg"
    }
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
      <Menu menuItems={menuItems} />
      <Location />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

export default App;
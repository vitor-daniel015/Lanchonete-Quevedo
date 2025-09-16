import React, { useRef, useEffect } from 'react';

// Interface para tipagem dos dados das histórias
interface StoryData {
  id: number;
  image: string;
  title: string;
  text: string;
}

const StoryCarousel: React.FC = () => {
  // Dados das imagens e histórias
  const storyData: StoryData[] = [
    { 
      id: 1, 
      image: 'public/images/Comidas/pamonha.jpg', 
      title: 'Título da Imagem 1', 
      text: 'Descrição da história da imagem 1.' 
    },
    { 
      id: 2, 
      image: 'https://via.placeholder.com/1200x800?text=Imagem+2', 
      title: 'Título da Imagem 2', 
      text: 'Descrição da história da imagem 2.' 
    },
    { 
      id: 3, 
      image: 'https://via.placeholder.com/1200x800?text=Imagem+3', 
      title: 'Título da Imagem 3', 
      text: 'Descrição da história da imagem 3.' 
    },
    { 
      id: 4, 
      image: 'https://via.placeholder.com/1200x800?text=Imagem+4', 
      title: 'Título da Imagem 4', 
      text: 'Descrição da história da imagem 4.' 
    },
    { 
      id: 5, 
      image: 'https://via.placeholder.com/1200x800?text=Imagem+5', 
      title: 'Título da Imagem 5', 
      text: 'Descrição da história da imagem 5.' 
    }
  ];

  // Refs para acessar os elementos DOM
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Função que será executada no evento de scroll
    const handleScroll = () => {
      if (!containerRef.current || !carouselRef.current) return;

      // Obter dimensões e posições
      const container = containerRef.current;
      const carousel = carouselRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calcular o progresso da rolagem
      // Quando o topo do container atinge o topo da tela, progresso = 0
      // Quando o bottom do container atinge o bottom da tela, progresso = 1
      const scrollStart = -rect.top;
      const scrollEnd = containerHeight - windowHeight;
      const scrollProgress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      // Calcular a distância total que o carrossel deve percorrer
      const carouselWidth = carousel.scrollWidth;
      const visibleWidth = window.innerWidth;
      const maxTranslateX = carouselWidth - visibleWidth;

      // Aplicar a transformação baseada no progresso da rolagem
      const translateX = scrollProgress * maxTranslateX;
      carousel.style.transform = `translateX(-${translateX}px)`;
    };

    // Adicionar o event listener
    window.addEventListener('scroll', handleScroll);

    // Executar uma vez para definir a posição inicial
    handleScroll();

    // Cleanup - remover o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative"
      style={{ height: `${300}vh` }} // Altura total para permitir rolagem suficiente
    >
      {/* Container sticky que fixa o carrossel na tela */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Container flexível das imagens */}
        <div 
          ref={carouselRef}
          className="flex h-full transition-transform duration-100 ease-out"
          style={{ width: `${storyData.length * 100}vw` }}
        >
          {storyData.map((story) => (
            <div 
              key={story.id} 
              className="relative w-screen h-full flex-shrink-0"
            >
              {/* Imagem */}
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay com gradiente para melhor legibilidade do texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Conteúdo de texto */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-8 z-10">
                <div className="text-center max-w-4xl">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    {story.title}
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed drop-shadow-md bg-black/30 rounded-lg p-4 backdrop-blur-sm">
                    {story.text}
                  </p>
                </div>
              </div>

              {/* Indicador de progresso no canto inferior direito */}
              <div className="absolute bottom-4 right-4 z-20">
                <div className="bg-black/50 rounded-full px-3 py-1 text-white text-sm backdrop-blur-sm">
                  {story.id} / {storyData.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Div espaçador para criar área de rolagem adicional */}
      <div className="h-screen bg-transparent" />
    </div>
  );
};

export default StoryCarousel;
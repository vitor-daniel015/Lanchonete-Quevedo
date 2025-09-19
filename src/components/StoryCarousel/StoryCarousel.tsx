import React, { useRef, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Paper,
  LinearProgress
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';

// Interface para tipagem dos dados das histórias
interface StoryData {
  id: number;
  image: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}

const StoryCarousel: React.FC = () => {
  // Dados das imagens e histórias com ícones
  const storyData: StoryData[] = [
    { 
      id: 1, 
      image: '/images/logo.png', 
      title: 'O Coração do Milho em Capela do Alto', 
      text: 'A Lanchonete Quevedo é reconhecida como o principal estabelecimento da região especializado em comidas de milho. Aqui, o milho não é apenas um ingrediente, é a nossa paixão e especialidade, transformado em pratos únicos que conquistam paladares de toda a região.',
      icon: <HomeIcon sx={{ color: '#d97706', fontSize: '2rem' }} />
    },
    { 
      id: 2, 
      image: '/images/Comidas/pamonha.jpg', 
      title: 'Mestres da Pamonha Tradicional', 
      text: 'Nossa pamonha é preparada artesanalmente com milho fresco selecionado, seguindo técnicas tradicionais que garantem aquela textura cremosa e sabor inconfundível. Cada pamonha é envolvida na palha do milho e cozida com o carinho que só a tradição caipira sabe oferecer.',
      icon: <RestaurantIcon sx={{ color: '#d97706', fontSize: '2rem' }} />
    },
    { 
      id: 3, 
      image: '/images/Comidas/sopaCompleta.jpg', 
      title: 'Sopa de Milho que Aquece Corações', 
      text: 'Nossa famosa sopa de milho com frango caipira é o carro-chefe que atrai visitantes de cidades vizinhas. Cremosa, saborosa e preparada com ingredientes frescos da região, é o prato perfeito para qualquer momento do dia, especialmente nos dias mais frescos.',
      icon: <RestaurantIcon sx={{ color: '#d97706', fontSize: '2rem' }} />
    },
    { 
      id: 4, 
      image: '/images/Comidas/sopa.JPG', 
      title: 'Tradição em Cada Bolinho e Pastel', 
      text: 'Nossos bolinhos caipiras crocantes e pastéis artesanais mantêm a autenticidade da culinária do interior paulista. Cada mordida é uma explosão de sabor que remete às receitas tradicionais, preparadas com ingredientes de qualidade e muito amor pela gastronomia caipira.',
      icon: <RestaurantIcon sx={{ color: '#d97706', fontSize: '2rem' }} />
    },
    { 
      id: 5, 
      image: '/images/Comidas/pamonha.jpg', 
      title: 'O Destino Gastronômico da Região', 
      text: 'Somos mais que uma lanchonete - somos um patrimônio gastronômico de Capela do Alto. Quando alguém busca a verdadeira comida de milho da região, sabe que encontrará aqui a qualidade, sabor e tradição que fazem da nossa mesa um pedacinho autêntico do interior paulista.',
      icon: <StarIcon sx={{ color: '#d97706', fontSize: '2rem' }} />
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
        {/* Container flexível das imagens com animação suave */}
        <div 
          ref={carouselRef}
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ width: `${storyData.length * 100}vw` }}
        >
          {storyData.map((story) => (
            <div 
              key={story.id} 
              className="relative w-screen h-full flex-shrink-0"
            >
              {/* Imagem com efeito */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent"></div>
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay com gradiente sofisticado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20" />
              
              {/* Conteúdo de texto melhorado com MUI Stepper - Posicionado inferior direita */}
              <div className="absolute bottom-8 right-8 z-10 max-w-2xl w-full">
                <div className="text-left">
                  {/* Card maior com conteúdo e stepper */}
                  <Paper 
                    elevation={12}
                    sx={{ 
                      background: 'linear-gradient(145deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 100%)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '20px',
                      border: '2px solid rgba(251, 191, 36, 0.4)',
                      p: 4,
                      maxWidth: '600px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    }}
                  >
                    {/* Título */}
                    <Typography 
                      variant="h4" 
                      component="h3" 
                      sx={{ 
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 'bold',
                        mb: 3,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                        fontFamily: '"Playfair Display", serif',
                        color: '#fbbf24',
                        lineHeight: 1.3
                      }}
                    >
                      {story.title}
                    </Typography>

                    {/* Ícone e indicador de progresso */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {React.cloneElement(story.icon as React.ReactElement, { 
                          sx: { color: '#fbbf24', fontSize: '1.8rem', mr: 2 } 
                        })}
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: '#fef3c7',
                            fontWeight: 'bold',
                            fontSize: '1.1rem'
                          }}
                        >
                          {story.id} de {storyData.length}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Progress bar */}
                    <LinearProgress 
                      variant="determinate" 
                      value={(story.id / storyData.length) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        mb: 3,
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
                          borderRadius: 4,
                        },
                        backgroundColor: 'rgba(255,255,255,0.2)',
                      }}
                    />
                    
                    {/* Texto principal maior */}
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        lineHeight: 1.6,
                        color: '#fef3c7',
                        textAlign: 'left',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                        fontWeight: 400,
                        mb: 3
                      }}
                    >
                      {story.text}
                    </Typography>

                    {/* Indicadores horizontais */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5 }}>
                      {storyData.map((step, index) => (
                        <Box
                          key={step.id}
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: index < story.id - 1 ? '#f59e0b' : 
                                           index === story.id - 1 ? '#fbbf24' : 'rgba(255,255,255,0.3)',
                            transition: 'all 0.3s ease',
                            transform: index === story.id - 1 ? 'scale(1.3)' : 'scale(1)',
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </div>
              </div>
              
              {/* Elemento decorativo de canto */}
              <div className="absolute top-6 left-6 z-20">
                <div className="w-16 h-16 border-l-4 border-t-4 border-amber-400/60 rounded-tl-xl"></div>
              </div>
              
              {/* Elemento decorativo de canto oposto */}
              <div className="absolute bottom-6 left-6 z-20">
                <div className="w-16 h-16 border-l-4 border-b-4 border-amber-400/60 rounded-bl-xl"></div>
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
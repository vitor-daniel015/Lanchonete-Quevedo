import React, { useRef, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Paper,
  LinearProgress
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
      image: '/images/CapelaDoAlto.jpg', 
      title: 'O Coração do Milho em Capela do Alto', 
      text: 'A Lanchonete Quevedo é reconhecida como o principal estabelecimento da região especializado em comidas de milho. Aqui, o milho não é apenas um ingrediente, é a nossa paixão e especialidade, transformado em pratos únicos que conquistam paladares de toda a região.',
      icon: <HomeIcon sx={{ color: '#d97706', fontSize: '2rem' }} />
    },
    { 
      id: 2, 
      image: '/images/Comidas/pamonha1.jpg', 
      title: 'Mestres da Pamonha Tradicional', 
      text: 'Nossa pamonha é preparada artesanalmente com milho fresco selecionado, seguindo técnicas tradicionais que garantem aquela textura cremosa e sabor inconfundível. Cada pamonha é envolvida na palha do milho e cozida com o carinho que só a tradição caipira sabe oferecer.',
      icon: <LocalDiningIcon sx={{ color: '#d97706', fontSize: '2rem' }} />
    },
    { 
      id: 3, 
      image: '/images/Comidas/sopaCompleta.jpg', 
      title: 'Sopa de Milho que Aquece Corações', 
      text: 'Nossa famosa sopa de milho com frango caipira é o carro-chefe que atrai visitantes de cidades vizinhas. Cremosa, saborosa e preparada com ingredientes frescos da região, é o prato perfeito para qualquer momento do dia, especialmente nos dias mais frescos.',
      icon: <FavoriteIcon sx={{ color: '#d97706', fontSize: '2rem' }} />
    },
    { 
      id: 4, 
      image: '/images/Comidas/SalgadoMilho.jpg', 
      title: 'Tradição em Cada Bolinho e Pastel', 
      text: 'Nossos bolinhos caipiras crocantes e pastéis artesanais mantêm a autenticidade da culinária do interior paulista. Cada mordida é uma explosão de sabor que remete às receitas tradicionais, preparadas com ingredientes de qualidade e muito amor pela gastronomia caipira.',
      icon: <RestaurantIcon sx={{ color: '#d97706', fontSize: '2rem' }} />
    },
    { 
      id: 5, 
      image: '/images/Lanchonete.png', 
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
        {/* Container flexível das imagens */}
        <div 
          ref={carouselRef}
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ width: `${storyData.length * 100}vw` }}
        >
          {storyData.map((story) => (
            <div 
              key={story.id} 
              className="relative w-screen h-full flex-shrink-0 flex"
            >
              {/* LADO ESQUERDO - Imagem bem ajustada ocupando 60% */}
              <div className="w-3/5 h-full relative overflow-hidden flex items-center justify-center p-8 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200">
                {/* Container da imagem com proporções controladas */}
                <div className="relative w-full h-full max-w-2xl max-h-full flex items-center justify-center">
                  {/* Efeito de fotografia impressa */}
                  <div className="relative bg-white p-6 shadow-2xl rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-700 border-4 border-black">
                    {/* Bordas internas da foto */}
                    <div className="relative bg-gray-100 p-2 shadow-inner ">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="max-w-full max-h-full object-cover rounded-sm transition-all duration-700 hover:scale-105 border border-black"
                        style={{
                          filter: 'brightness(1.05) contrast(1.1) saturate(1.2) sepia(0.1)',
                          aspectRatio: '4/3',
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '500px',
                          maxHeight: '400px'
                        }}
                      />
                      
                      {/* Reflexo da foto */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-sm"></div>
                      
                      {/* Sombra interna da moldura */}
                      <div className="absolute inset-0 shadow-inner rounded-sm pointer-events-none"></div>
                    </div>
                    
                    {/* Sombra da foto no fundo */}
                    <div className="absolute -inset-2 bg-black/10 rounded-lg -z-10 blur-sm"></div>
                  </div>
                </div>
                
                {/* Overlay gradiente suave apenas para transição com cores do site */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-amber-900/30 pointer-events-none" />
              </div>

              {/* LADO DIREITO - História ocupando 40% da tela */}
              <div className="w-2/5 h-full bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 flex items-center justify-center p-8">
                <div className="w-full max-w-lg">
                  <Paper 
                    elevation={8}
                    sx={{ 
                      background: 'linear-gradient(145deg, #ffffff 0%, #fef3c7 100%)',
                      borderRadius: '24px',
                      border: '2px solid #f59e0b',
                      p: 4,
                      boxShadow: '0 20px 40px rgba(245, 158, 11, 0.2)',
                      height: 'auto',
                      maxHeight: '90vh',
                      overflow: 'auto'
                    }}
                  >
                    {/* Ícone e indicador */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center' }}>
                      {React.cloneElement(story.icon as React.ReactElement, { 
                        sx: { color: '#d97706', fontSize: '3rem', mr: 2 } 
                      })}
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#92400e',
                          fontWeight: 'bold',
                          fontSize: '1.2rem'
                        }}
                      >
                        {story.id} de {storyData.length}
                      </Typography>
                    </Box>

                    {/* Título */}
                    <Typography 
                      variant="h3" 
                      component="h2" 
                      sx={{ 
                        fontSize: { xs: '1.8rem', md: '2.5rem' },
                        fontWeight: 'bold',
                        mb: 3,
                        fontFamily: '"Playfair Display", serif',
                        color: '#92400e',
                        lineHeight: 1.2,
                        textAlign: 'center'
                      }}
                    >
                      {story.title}
                    </Typography>

                    {/* Progress bar */}
                    <LinearProgress 
                      variant="determinate" 
                      value={(story.id / storyData.length) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        mb: 4,
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
                          borderRadius: 4,
                        },
                        backgroundColor: '#fef3c7',
                      }}
                    />
                    
                    {/* Texto principal */}
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                        lineHeight: 1.7,
                        color: '#92400e',
                        textAlign: 'justify',
                        fontWeight: 400,
                        mb: 4
                      }}
                    >
                      {story.text}
                    </Typography>

                    {/* Indicadores */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                      {storyData.map((step, index) => (
                        <Box
                          key={step.id}
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: index < story.id - 1 ? '#f59e0b' : 
                                           index === story.id - 1 ? '#fbbf24' : '#fef3c7',
                            border: '2px solid #d97706',
                            transition: 'all 0.3s ease',
                            transform: index === story.id - 1 ? 'scale(1.4)' : 'scale(1)',
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
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
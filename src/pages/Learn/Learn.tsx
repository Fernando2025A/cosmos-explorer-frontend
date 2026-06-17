import React from 'react';
import { LearnHeader } from '../../components/LearnHeader/LearnHeader';
import { LearnHero } from '../../components/LearnHero/LearnHero';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import { Lightbulb, BookOpen } from 'lucide-react';
import './Learn.css';
import { Navbar } from '../../components/NavBar/NavBar';

export const Learn: React.FC = () => {
  const categoriesData = [
    { title: 'Estrellas', description: 'Conoce su formación, tipos, evolución y ciclo de vida.', image: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=400&q=80' },
    { title: 'Planetas', description: 'Explora los planetas de nuestro sistema solar y sus lunas.', image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&q=80' },
    { title: 'Exoplanetas', description: 'Descubre mundos más allá de nuestro sistema solar.', image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&q=80' },
    { title: 'Agujeros negros', description: 'Entiende cómo se forman y qué los hace tan misteriosos.', image: 'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?w=400&q=80' },
    { title: 'Cometas', description: 'Cuerpos helados que viajan a través del espacio.', image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&q=80' },
    { title: 'Asteroides', description: 'Pequeños cuerpos rocosos del sistema solar.', image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=400&q=80' }
  ];

  return (
    <div className="learn-page-layout">
      <Navbar />
      <div className="learn-max-container">
        
        {/* BUSCADOR SUPERIOR */}
        <LearnHeader />

        {/* HERO - DESTACADOS */}
        <LearnHero />

        {/* SECCIÓN EXPLORA POR CATEGORÍA */}
        <section className="learn-categories-section">
          <span className="learn-section-tag">EXPLORA POR CATEGORÍA</span>
          <div className="categories-grid-box">
            {categoriesData.map((cat, idx) => (
              <CategoryCard key={idx} {...cat} />
            ))}
          </div>
        </section>

        {/* SECCIÓN INFERIOR: INFOPANEL DOBLE */}
        <section className="learn-bottom-insights-grid">
          
          {/* Bloque ¿Sabías qué? */}
          <div className="insight-card widget-trivia">
            <div className="insight-card-header">
              <Lightbulb size={18} className="purple-neon-text" />
              <h3>¿Sabías qué?</h3>
            </div>
            <div className="trivia-body-layout">
              <p className="trivia-text">
                Un día en Venus es más largo que su año. Venus tarda 243 días terrestres en rotar sobre su propio eje, pero solo 225 días en orbitar al Sol.
              </p>
              <div className="trivia-planet-visual">
                <div className="half-venus-sphere"></div>
              </div>
            </div>
          </div>

          {/* Bloque Concepto Clave */}
          <div className="insight-card widget-concept">
            <div className="insight-card-header">
              <BookOpen size={18} className="purple-neon-text" />
              <h3>Concepto clave</h3>
            </div>
            <div className="concept-body-layout">
              <div className="concept-text-side">
                <span className="concept-label-title">Gravedad</span>
                <p className="concept-definition">
                  Fuerza fundamental que atrae objetos con masa entre sí. Es la responsable de la formación de estrellas, planetas y galaxias.
                </p>
              </div>
              <div className="concept-space-canvas">
                {/* Rejilla/Malla espacio-tiempo simulada mediante CSS lineal */}
                <div className="gravity-mesh-grid">
                  <div className="gravity-center-planet"></div>
                  <div className="gravity-orbiting-moon"></div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};
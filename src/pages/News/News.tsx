import React from 'react';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { Sparkles } from 'lucide-react';
import './News.css';
import { Navbar } from '../../components/NavBar/NavBar';

export const News: React.FC = () => {
  // Array de datos basado fielmente en los artículos de la imagen
  const articles = [
    {
      id: 1,
      category: 'ASTRONOMÍA',
      time: 'Hace 2 horas',
      title: 'Descubren un agujero negro supermasivo inusualmente activo',
      description: 'Un equipo internacional de astrónomos detectó un agujero negro que está creciendo a un ritmo nunca antes observado en el universo temprano.',
      image: 'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?w=600&q=80'
    },
    {
      id: 2,
      category: 'EXOPLANETAS',
      time: 'Hace 6 horas',
      title: 'Hallan un exoplaneta potencialmente habitable en la zona de su estrella',
      description: 'El telescopio espacial James Webb detectó moléculas de agua en la atmósfera de un exoplaneta rocoso a solo 40 años luz de la Tierra.',
      image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=600&q=80'
    },
    {
      id: 3,
      category: 'UNIVERSO',
      time: 'Hace 1 día',
      title: 'Nuevas imágenes revelan detalles inéditos de la Nebulosa del Águila',
      description: 'Las nuevas observaciones en alta resolución muestran pilares de gas y polvo donde nacen nuevas estrellas en esta icónica nebulosa.',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80'
    }
  ];

  return (
    <div className="news-layout-container">
      <Navbar />
      <section className="news-section-wrapper">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <header className="news-section-header">
          <div className="news-title-row">
            <div className="news-title-icon-wrapper">
              <Sparkles size={24} className="sparkle-gradient-icon" />
            </div>
            <h2>Noticias recientes</h2>
          </div>
          <p className="news-section-subtitle">
            Mantente al día con los últimos descubrimientos y eventos del universo.
          </p>
        </header>

        {/* GRILLA DE TARJETAS */}
        <div className="news-grid-container">
          {articles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>

      </section>
    </div>
  );
};
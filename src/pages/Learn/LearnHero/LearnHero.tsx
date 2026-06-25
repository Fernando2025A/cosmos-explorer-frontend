import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const LearnHero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const subCards = [
    { title: 'Galaxias', desc: 'Sistemas masivos de estrellas, planetas y materia oscura.', img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&q=80' },
    { title: 'Nebulosas', desc: 'Nubes de gas y polvo donde nacen nuevas estrellas.', img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=300&q=80' },
    { title: 'Estrellas', desc: 'Esferas de plasma que brillan gracias a la fusión nuclear.', img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=300&q=80' }
  ];

  return (
    <section className="learn-hero-section">
      <span className="learn-section-tag">DESTACADO</span>
      
      <div className="hero-split-grid">
        {/* LADO IZQUIERDO: CARRUSEL PRINCIPAL */}
        <div className="hero-main-carousel">
          <div className="carousel-slide-content">
            <h2 className="slide-title">Agujeros negros</h2>
            <p className="slide-text">
              Regiones del espacio donde la gravedad es tan intensa que nada puede escapar, ni siquiera la luz.
            </p>
            <button className="slide-cta-btn">
              <span>Explorar tema</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Indicadores de navegación del carrusel */}
          <div className="carousel-dots-row">
            {[0, 1, 2, 3].map((idx) => (
              <span 
                key={idx} 
                className={`carousel-dot ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
              />
            ))}
          </div>
        </div>

        {/* LADO DERECHO: TARJETAS COMPACTAS */}
        <div className="hero-side-stack">
          {subCards.map((item, index) => (
            <div key={index} className="compact-topic-card">
              <div className="compact-card-left">
                <img src={item.img} alt={item.title} className="compact-card-img" />
                <div className="compact-card-text">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
              <ChevronRight size={16} className="compact-card-arrow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { 
  Rocket, Star, Orbit, Eclipse, Zap, Disc, Radio, Eye, Milestone 
} from 'lucide-react';
import './CosmosHome.css';
import { Link, useNavigate } from 'react-router-dom';

export const CosmosHome: React.FC = () => {
  // Datos de las 6 tarjetas de la sección accesos rápidos
  const cardsData = [
    { id: 1, title: 'ESTRELLAS', desc: 'Descubre las estrellas que iluminan el universo.', icon: <Star size={18} />, img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600&q=80' },
    { id: 2, title: 'PLANETAS', desc: 'Explora planetas del sistema solar y más allá.', icon: <Orbit size={18} />, img: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80' },
    { id: 3, title: 'GALAXIAS', desc: 'Viaja a través de galaxias lejanas e increíbles.', icon: <Eclipse size={18} />, img: 'https://imgs.search.brave.com/eaV0m7n84Qb0vMJIls8PNDAtRPQIXxR2tPqKb9F7fQU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9uZWJ1/bG9zYS15LWdhbGF4/aWFzLWVuLWVzcGFj/aW8tZWxlbWVudG9z/LWRlLWVzdGEtaW1h/Z2VuLWVxdWlwYWRv/cy1wb3ItbGEtbmFz/YS0xMjQ4NTg1NDku/anBn' },
    { id: 4, title: 'COMETAS', desc: 'Conoce los cometas y objetos helados.', icon: <Zap size={18} />, img: 'https://imgs.search.brave.com/3GHcWjaIZKGb6k--XgG0HdV7GbJR3_qtRQE3r-fnHRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb25j/ZXB0by5kZS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wNi9j/b21ldGEtZTE1NjE5/MzgyNzg5ODguanBn' },
    { id: 5, title: 'AGUJEROS NEGROS', desc: 'Explora los misterios de los agujeros negros.', icon: <Disc size={18} />, img: 'https://imgs.search.brave.com/9ZKD9iryyHN51LRgmymG0fF8LkdBOCZg3DtKdc1ggGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NjM0NjQ3NC9lcy9m/b3RvL2FndWplcm8t/bmVncm8teS11bi1k/aXNjby1kZS1wbGFz/bWEtYnJpbGxhbnRl/LXJlbmRlcml6YWRv/LTNkLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1LMmFfcjBO/dklJUGJ4OGlwRHRi/TXdHZ0RFSUZ2aEFa/Sy1QVjc1YTlPWjNF/PQ' },
    { id: 6, title: 'MISIONES', desc: 'Sigue misiones espaciales actuales y pasadas.', icon: <Radio size={18} />, img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600&q=80' },
  ];
  const navigate = useNavigate()
  const getGuide = () => {
    navigate('/guide')
  }
  return (
    <div className="cosmos-content-wrapper">
      
      {/* ================= SECCIÓN HERO ================= */}
      <header className="cosmos-hero">
        <div className="hero-text-content">
          <span className="hero-subtitle">EXPLORA</span>
          <h1 className="hero-title">EL COSMOS</h1>
          <div className="title-underline"></div>
          <p className="hero-description">
            Descubre los misterios del universo. Desde las estrellas más lejanas hasta los planetas más cercanos. El cosmos te espera.
          </p>
          <button className="hero-cta-btn" onClick={getGuide}>
            <Rocket size={16} />
            <span>COMENZAR EXPLORACIÓN</span>
            <Link to='/guide'></Link>
          </button>
        </div>
        
        {/* Planeta gigante con iluminación esférica CSS */}
        <div className="hero-visual">
          <div className="giant-planet"></div>
        </div>
      </header>

      {/* ================= SECCIÓN ACCESOS RÁPIDOS ================= */}
      <section className="cosmos-quick-access">
        <div className="section-divider">
          <span className="divider-text">ACCESOS RÁPIDOS</span>
        </div>

        <div className="cards-grid">
          {cardsData.map((card) => (
            <div key={card.id} className="quick-card">
              <div className="card-image-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
              </div>
              <div className="card-info">
                <div className="card-header-title">
                  {card.icon}
                  <h3>{card.title}</h3>
                </div>
                <p>{card.desc}</p>
                <div className="card-arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECCIÓN STATS & FOOTER ================= */}
      <footer className="cosmos-footer">
        <div className="stats-row">
          <div className="stat-box">
            <Eye className="stat-icon" size={24} />
            <div>
              <h4>2.1 T+</h4>
              <p>GALAXIAS DESCUBIERTAS</p>
            </div>
          </div>
          <div className="stat-box">
            <Star className="stat-icon" size={24} />
            <div>
              <h4>300B+</h4>
              <p>ESTRELLAS OBSERVADAS</p>
            </div>
          </div>
          <div className="stat-box">
            <Orbit className="stat-icon" size={24} />
            <div>
              <h4>5,400+</h4>
              <p>PLANETAS CONFIRMADOS</p>
            </div>
          </div>
          <div className="stat-box">
            <Milestone className="stat-icon" size={24} />
            <div>
              <h4>100+</h4>
              <p>MISIONES ESPACIALES</p>
            </div>
          </div>

          <div className="quote-box">
            <p className="quote-text">
              "El universo es grande... más grande que nuestra imaginación y más antiguo que nuestros sueños."
            </p>
            <span className="quote-author">— Carl Sagan</span>
          </div>
        </div>

        <div className="footer-credits">
          <span>© 2026 COSMOS. Todos los derechos reservados.</span>
          <div className="social-icons">
            <span>𝕏</span>
            <span>Instagram</span>
            <span>YouTube</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
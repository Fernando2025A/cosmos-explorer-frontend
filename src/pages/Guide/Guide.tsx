import React from 'react';
import { FeatureRow } from '../../components/FeatureRow/FeatureRow';
import { BookOpen, Compass, Users, Trophy, Newspaper, Rocket, Sparkles } from 'lucide-react';
import './Guide.css';
import { useElementOnScreen } from '../../Hooks/useIntersectionObserver';
import { Navbar } from '../../components/NavBar/NavBar';

export const Guide: React.FC = () => {
  const [sectionRef, isVisible] = useElementOnScreen();
  // Datos extraídos fielmente de las secciones visibles en la imagen
  const appSections = [
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
      icon: <BookOpen size={20} />,
      title: 'Sección Aprender',
      description: 'En la sección "Aprender" tendrás espacio para verificar la información de fuentes confiables, conceptos clave, artículos educativos y noticias sobre astronomía.',
      bullets: ['Artículos y guías', 'Conceptos clave', 'Temas organizados', 'Información actualizada']
    },
    {
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&q=80',
      icon: <Compass size={20} />,
      title: 'Sección Explorar',
      description: 'En la sección "Explorar" podrás descubrir objetos astronómicos, explorar datos interesantes y navegar por diferentes categorías del universo.',
      bullets: ['Estrellas, planetas y cosmos', 'Mapas e imágenes', 'Filtros y buscadores', 'Datos detallados']
    },
    {
      image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&q=80',
      icon: <Users size={20} />,
      title: 'Sección Comunidad',
      description: 'En "Comunidad" tendrás una vista al espacio de la comunidad, donde podrás ver posts, hacer preguntas, responder, compartir descubrimientos y más.',
      bullets: ['Foros de la comunidad', 'Hacer publicaciones', 'Preguntas y respuestas', 'Interacción y comentarios']
    },
    {
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&q=80',
      icon: <Trophy size={20} />,
      title: 'Sección Ranking',
      description: 'Participa activamente, gana puntos y sube posiciones en el ranking. Demuestra tus conocimientos y tu contribución a la comunidad.',
      bullets: ['Puntos y niveles', 'Clasificación global', 'Insignias y logros', 'Retos y recompensas']
    },
    {
      image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&q=80',
      icon: <Newspaper size={20} />,
      title: 'Sección Noticias',
      description: 'En "Noticias" te mantendrás al día con los últimos descubrimientos, misiones espaciales, eventos astronómicos y avances científicos.',
      bullets: ['Noticias actualizadas', 'Misiones y lanzamientos', 'Eventos astronómicos', 'Hallazgos recientes']
    }
  ];

  return (
    <div className="dashboard-page-container">
      <Navbar />
      <div className="dashboard-max-width">
        {/* ================= ENCABEZADO PRINCIPAL ================= */}
        <header className={`dashboard-hero-header fade-in-up ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
          <div className="hero-text-side">
            <div className="hero-title-row">
              <Sparkles className="title-sparkle" size={24} />
              <h1>Explorador del <span className="gradient-purple-text">cosmos</span></h1>
            </div>
            <p className="hero-lead-paragraph">
              Un espacio creado para explorar información confiable y verídica sobre astronomía.
              Nuestro objetivo es acercar el universo de una manera interactiva, visual
              y entretenida, ya seas principiante o un entusiasta del espacio.
              Aquí aprenderás, compartirás y te conectarás con personas que comparten tu misma pasión.
            </p>
          </div>
          <div className="hero-visual-side">
            {/* Renderización de la galaxia de fondo mediante CSS overlay */}
            <div className="floating-galaxy-graphic"></div>
          </div>
        </header>

        {/* ================= LISTADO DE SECCIONES ================= */}
        <section className="dashboard-sections-list">
          <div className="section-subtitle-row">
            <Sparkles className="title-sparkle" size={16} />
            <h3>Conoce las secciones de la app</h3>
          </div>
          
          <div className="rows-vertical-stack">
            {appSections.map((sec, index) => (
              <FeatureRow key={index} {...sec} />
            ))}
          </div>
        </section>

        {/* ================= SECCIÓN DE CIERRE (CTA + CITA) ================= */}
        <footer className="dashboard-footer-cta">
          <div className="cta-banner-box">
            <div className="cta-left-content">
              <div className="cta-icon-box">
                <Rocket size={22} />
              </div>
              <div className="cta-text-block">
                <h5>Empieza tu viaje</h5>
                <p>Guíate a tus propios ritmos de estudio, esta app se encarga de darte las herramientas.</p>
              </div>
            </div>
            <button className="cta-action-btn">
              <span>Explorar ahora</span>
              <Rocket size={14} className="rotated-rocket" />
            </button>
          </div>

          <div className="quote-container-box">
            <p className="quote-phrase">
              "La astronomía nos hace humildes y nos recuerda nuestro lugar en el universo."
            </p>
            <span className="quote-author">— Carl Sagan</span>
          </div>
        </footer>

      </div>
    </div>
  );
};
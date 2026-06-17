import React, { useState } from 'react';
import { PostCard } from '../../components/PostCard/PostCard';
import { Flame, Image, ArrowRight, MessageSquare, Trophy, LucideNewspaper } from 'lucide-react';
import './Explorer.css';
import { Navbar } from '../../components/NavBar/NavBar';

export const Explorer: React.FC = () => {
  const [activeBottomTab, setActiveBottomTab] = useState('posts');

  // Arreglo de objetos con la información de los posts de la imagen
  const spacePosts = [
    {
      id: 1,
      name: 'Astronova',
      username: '@astronova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
      time: 'Hace 2 horas',
      badge: 'Novato',
      content: 'Capturé esta Nebulosa de Orión desde mi patio trasero anoche. Increíble cómo algo tan lejano puede verse tan magnífico ✨',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
      likes: 128,
      comments: 24,
      shares: 12
    },
    {
      id: 2,
      name: 'GalaxiaErrante',
      username: '@galaxiaerrante',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80',
      time: 'Hace 5 horas',
      badge: 'Explorador',
      content: 'Júpiter y sus lunas en alineación perfecta esta noche. La naturaleza siempre nos deja sin palabras.',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80',
      likes: 96,
      comments: 18,
      shares: 7
    },
    {
      id: 3,
      name: 'CosmoViajero',
      username: '@cosmoviajero',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80',
      time: 'Hace 8 horas',
      badge: 'Explorador',
      content: 'Vía Láctea desde el desierto. Sin palabras...',
      image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&q=80',
      likes: 243,
      comments: 42,
      shares: 31
    }
  ];

  const trends = [
    { id: 1, tag: '#EclipseLunar', posts: '2.4K publicaciones' },
    { id: 2, tag: '#JamesWebb', posts: '1.7K publicaciones' },
    { id: 3, tag: '#Marte', posts: '1.2K publicaciones' },
    { id: 4, tag: '#Auroras', posts: '980 publicaciones' },
    { id: 5, tag: '#AgujerosNegros', posts: '870 publicaciones' }
  ];

  return (
    <div className="explorer-layout-container">
      <Navbar />
      <div className="explorer-main-content">
        
        {/* COLUMNA IZQUIERDA: FEED DE PUBLICACIONES */}
        <section className="explorer-feed-column">
          {spacePosts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </section>

        {/* COLUMNA DERECHA: BARRA LATERAL (TENDENCIAS / IMAGEN DEL DÍA) */}
        <aside className="explorer-sidebar-column">
          
          {/* Tarjeta de Tendencias */}
          <div className="sidebar-widget widget-trends">
            <div className="widget-title-row">
              <Flame size={18} className="purple-icon" />
              <h3>Tendencias</h3>
            </div>
            <ul className="trends-list">
              {trends.map(trend => (
                <li key={trend.id} className="trend-item">
                  <div className="trend-rank-meta">
                    <span className="trend-number">{trend.id}</span>
                    <div className="trend-text-block">
                      <span className="trend-tag">{trend.tag}</span>
                      <span className="trend-count">{trend.posts}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="widget-see-more-btn">
              <span>Ver más tendencias</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Tarjeta de la Imagen del Día */}
          <div className="sidebar-widget widget-pod">
            <div className="widget-title-row">
              <Image size={18} className="purple-icon" />
              <h3>Imagen del día</h3>
            </div>
            <div className="pod-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500&q=80" 
                alt="Galaxia del Remolino" 
                className="pod-img"
              />
            </div>
            <div className="pod-info">
              <h4>Galaxia del Remolino (M51)</h4>
              <p className="pod-desc">A 23 millones de años luz de distancia.</p>
              <p className="pod-credits">Crédito: NASA, ESA, Hubble</p>
            </div>
            <button className="widget-see-more-btn">
              <span>Ver más imágenes</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </aside>
      </div>

      {/* ================= MENÚ DE NAVEGACIÓN INFERIOR (PAGINADOR DE SECCIONES) ================= */}
      <div className="explorer-bottom-navigation">
        <div className="bottom-tabs-container">
          <button 
            className={`bottom-tab-btn ${activeBottomTab === 'posts' ? 'active' : ''}`}
            onClick={() => setActiveBottomTab('posts')}
          >
            <LucideNewspaper size={18} />
            <span>Posts</span>
          </button>
          <button 
            className={`bottom-tab-btn ${activeBottomTab === 'ranking' ? 'active' : ''}`}
            onClick={() => setActiveBottomTab('ranking')}
          >
            <Trophy size={18} />
            <span>Ranking</span>
          </button>
          <button 
            className={`bottom-tab-btn ${activeBottomTab === 'preguntas' ? 'active' : ''}`}
            onClick={() => setActiveBottomTab('preguntas')}
          >
            <MessageSquare size={18} />
            <span>Preguntas</span>
          </button>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  category: string;
  time: string;
  title: string;
  description: string;
  image: string;
  linkTo?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  category,
  time,
  title,
  description,
  image,
  linkTo = "#"
}) => {
  return (
    <article className="news-card">
      {/* Contenedor de la Imagen */}
      <div className="news-card-image-box">
        <img src={image} alt={title} className="news-card-img" />
      </div>

      {/* Contenido de Texto e Info */}
      <div className="news-card-body">
        <div className="news-card-meta">
          <span className="news-category">{category}</span>
          <div className="news-time">
            <Clock size={14} />
            <span>{time}</span>
          </div>
        </div>

        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-description">{description}</p>
        
        {/* Botón de acción inferior */}
        <a href={linkTo} className="news-read-more-btn">
          <span>Seguir leyendo</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
};
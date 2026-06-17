import React from 'react';

interface FeatureRowProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
}

export const FeatureRow: React.FC<FeatureRowProps> = ({
  image,
  icon,
  title,
  description,
  bullets
}) => {
  return (
    <div className="dashboard-feature-row">
      {/* Miniatura Ilustrada */}
      <div className="feature-image-box">
        <img src={image} alt={title} className="feature-img" />
      </div>

      {/* Bloque Central de Información */}
      <div className="feature-info-center">
        <div className="feature-title-wrapper">
          <div className="feature-icon-purple">{icon}</div>
          <h4>{title}</h4>
        </div>
        <p className="feature-description">{description}</p>
      </div>

      {/* Bloque Derecho de Viñetas */}
      <div className="feature-bullets-side">
        <ul className="feature-bullets-list">
          {bullets.map((bullet, idx) => (
            <li key={idx}>
              <span className="bullet-purple-dash">▪</span>
              <span className="bullet-text">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
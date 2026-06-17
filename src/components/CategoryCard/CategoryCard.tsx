import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  linkTo?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  image,
  linkTo = "#"
}) => {
  return (
    <div className="learn-category-card">
      <div className="category-card-image-box">
        <img src={image} alt={title} className="category-card-img" />
      </div>
      <div className="category-card-info">
        <h4 className="category-card-title">{title}</h4>
        <p className="category-card-desc">{description}</p>
        <a href={linkTo} className="category-card-link">
          <span>Ver más</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};
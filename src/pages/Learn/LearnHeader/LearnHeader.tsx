import React, { useState } from 'react';
import { Search } from 'lucide-react';

type LearnHeaderProps = {
  onSearch: (query: string) => Promise<void>;
};

export const LearnHeader: React.FC<LearnHeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSearch(searchQuery);
  };

  return (
    <header className="learn-header-block">
      <div className="learn-header-left">
        <h1 className="learn-main-title">Aprende sobre el universo</h1>
        <p className="learn-main-subtitle">
          Descubre conceptos, fenómenos y objetos astronómicos con información clara y confiable.
        </p>
      </div>

      <form onSubmit={handleSearchSubmit} className="learn-search-form">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon-inside" />
          <input 
            type="text" 
            placeholder="Buscar temas, objetos, conceptos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="learn-search-input"
          />
        </div>
        <button type="submit" className="learn-search-submit-btn">
          Buscar
        </button>
      </form>
    </header>
  );
};
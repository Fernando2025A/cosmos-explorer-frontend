import React, { useState } from 'react';
import { Search } from 'lucide-react';

type LearnHeaderProps = {
  onSearch: (query: string, type: string) => Promise<void>;
};

const searchTypeOptions = [
  { value: 'planet', label: 'Planeta' },
  { value: 'exoplanet', label: 'Exoplaneta' },
  { value: 'galaxy', label: 'Galaxia' },
  { value: 'start', label: 'Estrella' },
  { value: 'blackhole', label: 'Agujero negro' },
  { value: 'nebulose', label: 'Nebulosa' },
  { value: 'auto', label: 'Auto' },
];

export const LearnHeader: React.FC<LearnHeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('auto');
  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSearch(searchQuery, searchType);
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

        <div className="search-select-wrapper">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="search-type-select"
          >
            {searchTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="learn-search-submit-btn">
          Buscar
        </button>
      </form>
    </header>
  );
};
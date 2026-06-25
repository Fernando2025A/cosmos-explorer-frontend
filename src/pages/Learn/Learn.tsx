import React, { useState } from 'react';
import { LearnHeader } from './LearnHeader/LearnHeader';
import { LearnHero } from './LearnHero/LearnHero';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import { Lightbulb, BookOpen } from 'lucide-react';
import './Learn.css';
import { Navbar } from '../../components/NavBar/NavBar';
import SearchCard from './SearchCard/SearchCard';

type SearchFact = {
  label: string;
  value: string;
};

type SearchResult = {
  image: string;
  title: string;
  subtitle: string;
  facts: SearchFact[];
  description: string;
};

export const Learn: React.FC = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [noResultsQuery, setNoResultsQuery] = useState<string | null>(null);

  const categoriesData = [
    { title: 'Estrellas', description: 'Conoce su formación, tipos, evolución y ciclo de vida.', image: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=400&q=80' },
    { title: 'Planetas', description: 'Explora los planetas de nuestro sistema solar y sus lunas.', image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&q=80' },
    { title: 'Exoplanetas', description: 'Descubre mundos más allá de nuestro sistema solar.', image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&q=80' },
    { title: 'Agujeros negros', description: 'Entiende cómo se forman y qué los hace tan misteriosos.', image: 'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?w=400&q=80' },
    { title: 'Cometas', description: 'Cuerpos helados que viajan a través del espacio.', image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&q=80' },
    { title: 'Asteroides', description: 'Pequeños cuerpos rocosos del sistema solar.', image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=400&q=80' }
  ];

  const formatNumber = (value: unknown, digits = 1): string => {
    if (typeof value === 'number') return value.toFixed(digits);
    if (typeof value === 'string' && value.trim()) return value;
    return 'N/A';
  };

  const formatMass = (massValue: unknown): string => {
    const mass = massValue as Record<string, unknown> | null;
    if (!mass) return 'N/A';
    const value = mass.massValue as number | undefined;
    const exponent = mass.massExponent as number | undefined;
    if (typeof value === 'number' && typeof exponent === 'number') {
      return `${value.toFixed(2)} ×10^${exponent} kg`;
    }
    return 'N/A';
  };

  const formatOrbitDays = (daysValue: unknown): string => {
    if (typeof daysValue !== 'number') return 'N/A';
    if (daysValue > 365) {
      const years = daysValue / 365;
      return `${years.toFixed(2)} años terrestres (${daysValue.toFixed(1)} días)`;
    }
    return `${daysValue.toFixed(1)} días terrestres`;
  };

  const mapSearchData = (data: unknown, query: string): SearchResult => {
    const result = data as Record<string, unknown>;
    const name = (result?.name as string) || query || 'Resultado de búsqueda';
    const englishName = (result?.englishName as string) || '';
    const image = (result?.imageUrl as string) || 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80';
    const bodyType = (result?.bodyType as string) || '';
    const moons = Array.isArray(result?.moons) ? (result?.moons as unknown[]).length : 0;
    const meanRadius = result?.meanRadius as number | undefined;
    const gravity = result?.gravity as number | undefined;
    const avgTemp = result?.avgTemp as number | undefined;
    const sideralOrbit = result?.sideralOrbit as number | undefined;
    const sideralRotation = result?.sideralRotation as number | undefined;

    const subtitleParts = [bodyType, englishName && englishName !== name ? `Inglés: ${englishName}` : '']
      .filter(Boolean);

    return {
      title: name,
      subtitle: subtitleParts.join(' • ') || 'Datos del sistema solar',
      image,
      facts: [
        { label: 'Masa', value: formatMass(result?.mass) },
        { label: 'Radio medio', value: `${formatNumber(meanRadius, 1)} km` },
        { label: 'Gravedad', value: `${formatNumber(gravity, 2)} m/s²` },
        { label: 'Temperatura', value: `${formatNumber(avgTemp, 0)} K` },
        { label: 'Lunas', value: `${moons}` },
        { label: 'Órbita sideral', value: formatOrbitDays(sideralOrbit) },
        { label: 'Rotación sideral', value: `${formatNumber(sideralRotation, 1)} h` },
      ],
      description: `Información del backend para ${name}.`,
    };
  };

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setSearchError('Ingresa un término de búsqueda válido.');
      setNoResultsQuery(null);
      setSearchResult(null);
      return;
    }

    setSearchLoading(true);
    setSearchError(null);
    setNoResultsQuery(null);
    setSearchResult(null);

    try {
      const response = await fetch(`${apiUrl}/planets/${encodeURIComponent(searchQuery)}`, {
        credentials: 'include',
      });

      const responseText = await response.text();
      let data: unknown;
      try {
        data = JSON.parse(responseText);
      } catch {
        data = responseText;
      }

      const parsedBody = data as Record<string, unknown>;
      if (!response.ok || parsedBody?.statusCode) {
        setNoResultsQuery(searchQuery);
        setSearchError(null);
        return;
      }

      setSearchResult(mapSearchData(data, searchQuery));
    } catch (error) {
      setSearchError(error instanceof Error ? error.message : 'Error al cargar datos.');
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <div className="learn-page-layout">
      <Navbar />
      <div className="learn-max-container">
        
        {/* BUSCADOR SUPERIOR */}
        <LearnHeader onSearch={handleSearch} />
        <div className='cards-container'>
          {searchLoading && <div className="search-message">Buscando...</div>}
          {searchError && <div className="search-message search-error">{searchError}</div>}
          {noResultsQuery && (
            <div className="search-error-card">
              No se encontraron resultados para "{noResultsQuery}"
            </div>
          )}
          {searchResult && (
            <SearchCard
              image={searchResult.image}
              title={searchResult.title}
              subtitle={searchResult.subtitle}
              facts={searchResult.facts}
              description={searchResult.description}
            />
          )}
        </div>
        
        {/* HERO - DESTACADOS */}
        <LearnHero />

        
        {/* SECCIÓN EXPLORA POR CATEGORÍA */}
        <section className="learn-categories-section">
          <span className="learn-section-tag">EXPLORA POR CATEGORÍA</span>
          <div className="categories-grid-box">
            {categoriesData.map((cat, idx) => (
              <CategoryCard key={idx} {...cat} />
            ))}
          </div>
        </section>

        {/* SECCIÓN INFERIOR: INFOPANEL DOBLE */}
        <section className="learn-bottom-insights-grid">
          
          {/* Bloque ¿Sabías qué? */}
          <div className="insight-card widget-trivia">
            <div className="insight-card-header">
              <Lightbulb size={18} className="purple-neon-text" />
              <h3>¿Sabías qué?</h3>
            </div>
            <div className="trivia-body-layout">
              <p className="trivia-text">
                Un día en Venus es más largo que su año. Venus tarda 243 días terrestres en rotar sobre su propio eje, pero solo 225 días en orbitar al Sol.
              </p>
              <div className="trivia-planet-visual">
                <div className="half-venus-sphere"></div>
              </div>
            </div>
          </div>

          {/* Bloque Concepto Clave */}
          <div className="insight-card widget-concept">
            <div className="insight-card-header">
              <BookOpen size={18} className="purple-neon-text" />
              <h3>Concepto clave</h3>
            </div>
            <div className="concept-body-layout">
              <div className="concept-text-side">
                <span className="concept-label-title">Gravedad</span>
                <p className="concept-definition">
                  Fuerza fundamental que atrae objetos con masa entre sí. Es la responsable de la formación de estrellas, planetas y galaxias.
                </p>
              </div>
              <div className="concept-space-canvas">
                {/* Rejilla/Malla espacio-tiempo simulada mediante CSS lineal */}
                <div className="gravity-mesh-grid">
                  <div className="gravity-center-planet"></div>
                  <div className="gravity-orbiting-moon"></div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};
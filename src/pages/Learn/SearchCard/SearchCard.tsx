import './SearchCard.css'

type Fact = {
  label: string;
  value: string;
};

type Props = {
  image: string;
  title: string;
  subtitle: string;
  facts: Fact[];
  description: string;
}

function SearchCard({ image, title, subtitle, facts, description }: Props) {
  return (
    <div className='search-card-container'>
      <img src={image} alt={title} />
      <div className='search-card-header'>
        <div>
          <h5>{title}</h5>
          <p className='search-card-subtitle'>{subtitle}</p>
        </div>
      </div>
      <div className='search-card-facts'>
        {facts.map((fact) => (
          <div key={fact.label} className='search-card-fact'>
            <span className='search-card-fact-label'>{fact.label}</span>
            <span className='search-card-fact-value'>{fact.value}</span>
          </div>
        ))}
      </div>
      <p className='search-card-description'>{description}</p>
      <button>Leer más</button>
    </div>
  )
}

export default SearchCard
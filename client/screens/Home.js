import React from 'react';
import ListingCard from '../components/ListingCard';
import SearchBar from '../components/SearchBar';
import { Colors } from '../styles/theme';

// Beispiel-Listings basierend auf dem Screenshot "Gäste-Favorit"
const mockListings = [
    { id: 'L01', title: 'Unterkunft in Angelbachtal', price: 85, location: '1.-14. Dez. Private:r Gastgeber:in', rating: 4.89, type: 'Unterkunft', tag: 'Gäste-Favorit' },
    { id: 'L02', title: 'Wohnung in Ubstadt-Weiher', price: 92, location: '1.-14. Dez. Private:r Gastgeber:in', rating: 4.75, type: 'Unterkunft', tag: 'Gäste-Favorit' },
];

const Home = ({ setActiveScreen }) => {
  const [activeTab, setActiveTab] = React.useState('Unterkünfte');

  return (
    <div style={{ padding: '16px', paddingBottom: '70px' }}>
      <SearchBar />
      
      {/* Obere Navigation: Unterkünfte / Entdeckungen / Services */}
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0 30px 0' }}>
        {['Unterkünfte', 'Entdeckungen', 'Services'].map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveScreen(tab)} // Navigiert zur passenden Seite
            style={{ 
              border: 'none', 
              background: 'none', 
              cursor: 'pointer', 
              fontSize: '16px',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              paddingBottom: '8px',
              borderBottom: activeTab === tab ? `2px solid ${Colors.PRIMARY_BLUE}` : '2px solid transparent',
              color: activeTab === tab ? Colors.PRIMARY_BLUE : Colors.TEXT_DARK
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Inhalt der Startseite (Unterkünfte) */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Übernachte in der Nähe von Hockenheimring</h2>
        {mockListings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Home;

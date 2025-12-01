import React from 'react';
import ListingCard from '../components/ListingCard';
import { Colors, Styles } from '../styles/theme';

// Beispiel-Listings basierend auf dem Screenshot "Beliebte Entdeckungen"
const mockDiscoveries = [
    { id: 'D01', title: 'Ein Spaziergang durch die Geschichte Münchens', price: 27, location: 'Private:r Gastgeber:in', rating: 4.96, type: 'Entdeckung', tag: 'Beliebt' },
    { id: 'D02', title: 'Fahre mit dem Fahrrad durch Münchens Biergärten', price: 40, location: 'Private:r Gastgeber:in', rating: 4.81, type: 'Entdeckung', tag: 'Beliebt' },
];

const Discover = () => {
  const [showModal, setShowModal] = React.useState(true); // Simuliert das "Qualität überprüft" Modal

  return (
    <div style={{ padding: '16px', paddingBottom: '70px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>Beliebte Entdeckungen in München</h1>
      
      {mockDiscoveries.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
      ))}
      
      {/* Modal: Entdeckungen werden auf Qualität überprüft */}
      {showModal && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0,0,0,0.5)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          zIndex: 100
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            maxWidth: '90%'
          }}>
            {/* Goldenes Siegel Placeholder */}
            <div style={{ margin: '0 auto 20px', width: '60px', height: '60px', backgroundColor: '#FFD700', borderRadius: '50%' }}></div>
            
            <h2 style={{ fontSize: '20px', margin: '0 0 10px 0' }}>Entdeckungen auf Golden Investments werden auf ihre Qualität überprüft</h2>
            <p style={{ color: '#717171', margin: '0 0 20px 0' }}>Entdeckungen werden auf Fachkenntnisse, Reputation und Authentizität geprüft.</p>
            
            <button 
              onClick={() => setShowModal(false)} 
              style={{ ...Styles.primaryButton, width: '100%', backgroundColor: Colors.PRIMARY_BLUE }}
            >
              <span style={Styles.primaryButtonText}>Entdeckungen erkunden</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discover;

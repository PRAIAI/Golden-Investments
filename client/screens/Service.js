import React from 'react';
import { Colors, Styles } from '../styles/theme';

// Beispiel Services basierend auf Screenshot
const mockServices = [
    { id: 'S01', name: 'Fotografie', available: 2, status: 'verfügbar', imageUrl: 'placeholder_fotografie' },
    { id: 'S02', name: 'Köch:innen', available: 0, status: 'Bald verfügbar', imageUrl: 'placeholder_koch' },
];

const Services = () => {
    const [showModal, setShowModal] = React.useState(true); // Simuliert das "Qualität überprüft" Modal
    
    return (
        <div style={{ padding: '16px', paddingBottom: '70px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>Services in Ihrer Nähe</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {mockServices.map(service => (
                    <div key={service.id} style={{ borderRadius: '12px', overflow: 'hidden', ...Styles.shadow }}>
                        <div style={{ height: '150px', backgroundColor: Colors.SECONDARY_BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center', color: Colors.TEXT_LIGHT }}>
                            {service.name} Bild
                        </div>
                        <div style={{ padding: '12px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 4px 0' }}>{service.name}</p>
                            <p style={{ color: '#717171', fontSize: '14px', margin: 0 }}>
                                {service.available > 0 ? `${service.available} verfügbar` : service.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal: Services werden auf Qualität überprüft */}
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
                        
                        <h2 style={{ fontSize: '20px', margin: '0 0 10px 0' }}>Services auf Golden Investments werden auf ihre Qualität überprüft</h2>
                        <p style={{ color: '#717171', margin: '0 0 20px 0' }}>Services werden auf Fachkenntnisse und Reputation geprüft.</p>
                        
                        <button 
                            onClick={() => setShowModal(false)} 
                            style={{ ...Styles.primaryButton, width: '100%', backgroundColor: Colors.PRIMARY_BLUE }}
                        >
                            <span style={Styles.primaryButtonText}>Services erkunden</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;

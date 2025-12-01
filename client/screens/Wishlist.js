import React from 'react';
import { Colors, Styles } from '../styles/theme';
import { Heart } from 'lucide-react'; 

// Seite, die zum Einloggen auffordert, wenn der Benutzer nicht authentifiziert ist.
const Wishlist = ({ navigate }) => {
    const isAuthenticated = false; // Platzhalter-Status
    
    if (isAuthenticated) {
        return (
            <div style={{ padding: '16px', paddingBottom: '70px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>Meine Wunschlisten</h1>
                <p>Hier würden Ihre gespeicherten Favoriten angezeigt werden.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '16px', paddingBottom: '70px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '40px 0 20px 0' }}>Wunschlisten</h1>
            <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Logge dich ein, um deine Wunschliste zu sehen</p>
            <p style={{ color: '#717171', marginBottom: '30px' }}>Du kannst Wunschlisten erstellen, anzeigen oder bearbeiten, sobald du eingeloggt bist.</p>
            
            {/* Herz-Symbol wie im Modal des Screenshots */}
            <div style={{ 
                width: '200px', 
                height: '200px', 
                backgroundColor: Colors.SECONDARY_BLUE, 
                borderRadius: '12px', 
                margin: '0 auto 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Heart size={48} color="white" fill="white" />
            </div>

            <button 
                onClick={() => navigate('Auth')} 
                style={{ ...Styles.primaryButton, width: '90%', backgroundColor: Colors.PRIMARY_BLUE }}
            >
                <span style={Styles.primaryButtonText}>Log-in</span>
            </button>
        </div>
    );
};

export default Wishlist;

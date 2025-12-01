import React from 'react';
import { Colors, Styles } from '../styles/theme';

// Anmelde-/Registrierungsseite mit verschiedenen Login-Optionen
const Auth = ({ navigate }) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  
  const handleContinue = () => {
    console.log(`Versuche mit Telefonnummer fortzufahren: ${phoneNumber}`);
    // Hier würde die API-Anfrage an den authController gehen
  };

  return (
    <div style={{ padding: '16px', paddingBottom: '70px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '40px 0' }}>Willkommen bei Golden Investments</h1>

      <div style={{ marginBottom: '20px' }}>
        {/* Land/Region Dropdown Placeholder */}
        <div style={{ padding: '15px', border: `1px solid ${Colors.BORDER_GREY}`, borderRadius: '8px', marginBottom: '10px' }}>
            <label style={{ fontSize: '12px', color: '#717171' }}>Land/Region</label>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Deutschland (+49)</p>
        </div>
        
        {/* Telefonnummer Eingabe */}
        <div style={{ padding: '15px', border: `1px solid ${Colors.BORDER_GREY}`, borderRadius: '8px' }}>
            <label htmlFor="phone" style={{ fontSize: '12px', color: '#717171' }}>Telefonnummer</label>
            <input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ width: '100%', border: 'none', outline: 'none', fontWeight: 'bold' }}
            />
        </div>
      </div>
      
      <p style={{ fontSize: '12px', color: '#717171', margin: '0 0 20px 0' }}>
        Wir werden dich anrufen oder dir eine SMS senden, um deine Nummer zu bestätigen. Es können die üblichen Gebühren für die Nachrichten- und Datenübertragung anfallen. 
        <a href="#" style={{ color: Colors.PRIMARY_BLUE, fontWeight: 'bold' }}>Datenschutzerklärung</a>
      </p>

      <button 
        onClick={handleContinue} 
        style={{ ...Styles.primaryButton, width: '100%', backgroundColor: Colors.PRIMARY_BLUE }}
      >
        <span style={Styles.primaryButtonText}>Weiter</span>
      </button>

      <div style={{ textAlign: 'center', margin: '20px 0', color: '#717171', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: Colors.BORDER_GREY, zIndex: 1 }}></div>
          <span style={{ backgroundColor: 'white', padding: '0 10px', zIndex: 2, position: 'relative' }}>oder</span>
      </div>

      {/* Alternative Login-Optionen */}
      <div style={{ display: 'grid', gap: '10px' }}>
        <button className="social-login-btn" style={{ padding: '14px', border: `1px solid ${Colors.BORDER_GREY}`, borderRadius: '8px', background: 'white', fontWeight: 'bold' }}>Mit Google fortfahren</button>
        <button className="social-login-btn" style={{ padding: '14px', border: `1px solid ${Colors.BORDER_GREY}`, borderRadius: '8px', background: 'white', fontWeight: 'bold' }}>Mit Apple fortfahren</button>
        <button className="social-login-btn" style={{ padding: '14px', border: `1px solid ${Colors.BORDER_GREY}`, borderRadius: '8px', background: 'white', fontWeight: 'bold' }}>Mit E-Mail-Adresse anmelden</button>
      </div>
    </div>
  );
};

export default Auth;

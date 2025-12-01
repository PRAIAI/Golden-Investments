import React from 'react';
import FooterNav from './components/FooterNav';
import Home from './screens/Home';
import Discover from './screens/Discover';
import Services from './screens/Services';
import Wishlist from './screens/Wishlist';
import Auth from './screens/Auth';

// Die Hauptdatei der Frontend-Anwendung
const App = () => {
  // Steuert die Navigation zwischen den Haupt-Screens
  const [activeScreen, setActiveScreen] = React.useState('Home'); 

  // Funktion zur Navigation (wird an FooterNav übergeben)
  const navigate = (screenName) => {
    // Spezialfall-Handling für die oberen Tabs
    if (screenName === 'Unterkünfte') {
        setActiveScreen('Home');
    } else if (screenName === 'Entdeckungen') {
        setActiveScreen('Discover');
    } else if (screenName === 'Services') {
        setActiveScreen('Services');
    } else {
        setActiveScreen(screenName);
    }
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Home':
      case 'Unterkünfte':
        return <Home setActiveScreen={navigate} />;
      case 'Discover':
      case 'Entdeckungen':
        return <Discover />;
      case 'Services':
        return <Services />;
      case 'Wishlist':
        return <Wishlist navigate={navigate} />;
      case 'Auth':
        return <Auth navigate={navigate} />;
      default:
        return <Home setActiveScreen={navigate} />;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Haupt-Inhalt */}
      <main style={{ maxWidth: '600px', margin: '0 auto' }}>
        {renderScreen()}
      </main>
      
      {/* Footer-Navigation */}
      <FooterNav activeScreen={activeScreen} navigate={navigate} />
    </div>
  );
};

export default App;

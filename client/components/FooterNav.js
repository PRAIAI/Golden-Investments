import React from 'react';
import { Colors } from '../styles/theme';
// Phospor Icons für einfache Darstellung der Symbole
// 'magnifying glass', 'heart', 'user', 'house'
import { House, MagnifyingGlass, Heart, User } from 'phosphor-react'; 

// Die untere Navigationsleiste, wie in den Screenshots zu sehen
const FooterNav = ({ activeScreen, navigate }) => {
  const navItems = [
    { name: 'Erkunden', icon: MagnifyingGlass, screen: 'Home' },
    { name: 'Wunschlisten', icon: Heart, screen: 'Wishlist' },
    { name: 'Einloggen', icon: User, screen: 'Auth' },
    // Home-Symbol wurde in einem Screenshot nicht gezeigt, aber oft impliziert
    { name: 'Home', icon: House, screen: 'Home' }, 
  ];

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      padding: '8px 0',
      borderTop: `1px solid ${Colors.BORDER_GREY}`,
      backgroundColor: Colors.BACKGROUND,
      position: 'fixed',
      bottom: 0,
      width: '100%',
    }}>
      {navItems.map((item) => {
        const isActive = item.screen === activeScreen;
        const Icon = item.icon;
        return (
          <div 
            key={item.name} 
            onClick={() => navigate(item.screen)} 
            style={{ 
              color: isActive ? Colors.PRIMARY_BLUE : Colors.TEXT_DARK, 
              textAlign: 'center', 
              cursor: 'pointer' 
            }}
          >
            <Icon size={24} weight={isActive ? "fill" : "regular"} />
            <p style={{ fontSize: '10px', marginTop: '4px' }}>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FooterNav;

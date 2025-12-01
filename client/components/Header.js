import React from 'react';
import { Colors } from '../styles/theme';

// Header-Komponente mit Platzhaltern für das "Golden Investments"-Logo und die Suche
const Header = () => {
  return (
    <div style={{ backgroundColor: Colors.BACKGROUND, padding: '16px', borderBottom: `1px solid ${Colors.BORDER_GREY}` }}>
      {/* Das Logo von Golden Investments würde hier stehen */}
      <h1 style={{ color: Colors.PRIMARY_BLUE, fontSize: '24px', fontWeight: 'bold' }}>Golden Investments</h1>
    </div>
  );
};

export default Header;

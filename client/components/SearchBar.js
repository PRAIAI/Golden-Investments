import React from 'react';
import { Colors, Styles } from '../styles/theme';
import { Search } from 'lucide-react'; 

// Die Suchleiste "Jetzt suchen"
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    console.log(`Suche gestartet für: ${searchTerm}`);
    if (onSearch) onSearch(searchTerm);
  };

  return (
    <div style={{ padding: '0 16px', position: 'sticky', top: '0', backgroundColor: Colors.BACKGROUND, zIndex: 10 }}>
      <div style={{ 
        ...Styles.shadow, 
        padding: '12px 16px', 
        borderRadius: '30px', 
        border: `1px solid ${Colors.BORDER_GREY}`,
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0'
      }}>
        <Search size={20} color={Colors.TEXT_DARK} style={{ marginRight: '10px' }} />
        <input
          type="text"
          placeholder="Jetzt suchen"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            background: 'transparent'
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <button 
          onClick={handleSearch} 
          style={{ 
            backgroundColor: Colors.PRIMARY_BLUE, 
            color: Colors.TEXT_LIGHT, 
            border: 'none', 
            borderRadius: '50%', 
            width: '30px', 
            height: '30px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
          <Search size={16} color={Colors.TEXT_LIGHT}/>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

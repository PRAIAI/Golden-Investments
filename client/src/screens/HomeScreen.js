import React, { useState, useEffect } from 'react';
// Importiert die Bausteine
import InvestmentCard from '../components/InvestmentCard';
import FilterBar from '../components/FilterBar';
// Importiert die Konstanten und Mock-Daten
import { MOCK_INVESTMENTS } from '../shared/constants';

// HomeScreen ist eine "intelligente" Komponente: Sie verwaltet den State und die Datenlogik.
function HomeScreen() {
  const [investments, setInvestments] = useState(MOCK_INVESTMENTS);
  const [filteredInvestments, setFilteredInvestments] = useState(MOCK_INVESTMENTS);
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  // Filter-Logik: Wird ausgeführt, wenn sich die Kategorie oder die Investments ändern
  useEffect(() => {
    const filtered = investments.filter(inv =>
      selectedCategory === 'Alle' || inv.category === selectedCategory
    );
    setFilteredInvestments(filtered);
  }, [selectedCategory, investments]);

  return (
    <main className="main-content">
      <h2>Verfügbare Anlagen ({filteredInvestments.length})</h2>
      
      {/* Die FilterBar gibt den State an HomeScreen zurück */}
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="investments-grid">
        {filteredInvestments.length > 0 ? (
          // Rendert die InvestmentCard für jede gefilterte Anlage
          filteredInvestments.map(inv => (
            <InvestmentCard key={inv.id} investment={inv} />
          ))
        ) : (
          <p className="no-results">Keine Anlagen in dieser Kategorie gefunden.</p>
        )}
      </div>
    </main>
  );
}

export default HomeScreen;
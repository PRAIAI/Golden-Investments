import React from 'react';
// Importiert die Konstanten für die Dropdown-Optionen
import { INVESTMENT_CATEGORIES } from '../shared/constants';

// FilterBar ist eine "dumme" Komponente: Sie verwendet die übergebene Callback-Funktion
// (setSelectedCategory), um den State im übergeordneten HomeScreen zu aktualisieren.
const FilterBar = ({ selectedCategory, setSelectedCategory }) => (
  <div className="filter-bar">
    <label htmlFor="category-select">Filter nach Kategorie:</label>
    <select
      id="category-select"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="Alle">Alle</option>
      {INVESTMENT_CATEGORIES.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  </div>
);

export default FilterBar;
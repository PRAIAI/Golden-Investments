import React from 'react';

// InvestmentCard ist eine "dumme" Komponente: Sie rendert nur die Daten, die sie erhält.
const InvestmentCard = ({ investment }) => (
  // Die Klassen verweisen weiterhin auf App.css
  <div className="card">
    <div className="card-header">
      <h3 className="card-title">{investment.name}</h3>
      <span className={`status ${investment.status.toLowerCase()}`}>{investment.status}</span>
    </div>
    <div className="card-body">
      <p>Kategorie: <strong>{investment.category}</strong></p>
      {/* Bedingte Klasse für positive/negative Rendite */}
      <p>Rendite (YTD): <span className={investment.ytdReturn >= 0 ? 'positive' : 'negative'}>{investment.ytdReturn.toFixed(2)}%</span></p>
      <p>Risiko: {investment.riskLevel}</p>
      {/* Formatiert das Volumen in Euro */}
      <p>Volumen: {investment.volume.toLocaleString('de-DE')} €</p>
    </div>
    <button className="button-primary">Details ansehen</button>
  </div>
);

export default InvestmentCard;
import React from 'react';
import { Colors } from '../styles/theme';
import { Heart, Star } from 'lucide-react'; 

// Komponenten für Unterkünfte und Entdeckungen
const ListingCard = ({ listing }) => {
  const isFavorite = false; // Platzhalter für den Wunschlisten-Status
  
  return (
    <div style={{ width: '100%', marginBottom: '24px' }}>
      <div style={{ position: 'relative', height: '200px', borderRadius: '12px', overflow: 'hidden' }}>
        {/* Placeholder-Bild */}
        <div 
          style={{ 
            width: '100%', 
            height: '100%', 
            backgroundColor: Colors.SECONDARY_BLUE, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: Colors.TEXT_LIGHT,
            fontSize: '14px'
          }}>
          {listing.type} Placeholder-Bild
        </div>
        
        {/* Gäste-Favorit / Beliebt Tag */}
        {listing.tag && (
          <span style={{ 
            position: 'absolute', 
            top: '12px', 
            left: '12px', 
            backgroundColor: 'white', 
            padding: '4px 8px', 
            borderRadius: '4px', 
            fontWeight: 'bold', 
            fontSize: '12px' 
          }}>
            {listing.tag}
          </span>
        )}

        {/* Herz-Icon für Wunschliste - In Babyblau */}
        <button 
          style={{ 
            position: 'absolute', 
            top: '12px', 
            right: '12px', 
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: isFavorite ? Colors.PRIMARY_BLUE : 'white',
          }}>
          <Heart size={24} fill={isFavorite ? Colors.PRIMARY_BLUE : 'rgba(0,0,0,0.5)'} strokeWidth={2} />
        </button>
      </div>
      
      {/* Listing Details */}
      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: 'bold', margin: '0 0 4px 0' }}>{listing.title}</p>
          <p style={{ color: '#717171', fontSize: '14px', margin: 0 }}>{listing.location}</p>
          <p style={{ fontWeight: 'bold', margin: '4px 0 0 0', fontSize: '15px' }}>Ab {listing.price} € / Nacht</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '14px' }}>
          <Star size={14} fill={Colors.RATING_STAR} stroke={Colors.RATING_STAR} style={{ marginRight: '4px' }}/>
          {listing.rating.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;

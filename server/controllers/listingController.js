import Listing from '../models/Listing.js';

// Ruft Daten für die Startseite ab (Gäste-Favoriten, Suche-Header)
export const getHomeListings = (req, res) => {
    // Ruft Listings ab, die als 'Gäste-Favorit' markiert sind
    const favoriteListings = Listing.find({ type: 'Unterkunft', tag: 'Gäste-Favorit' });
    
    // Optional: Füge Logik hinzu, um den Such-Header-Text zu bestimmen (z.B. basierend auf Standort)
    const searchHeader = "Suche nach weiteren Unterkünften in Heidelberg";
    
    res.json({
        searchHeader: searchHeader,
        listings: favoriteListings
    });
};

// Ruft Daten für die Entdeckungen-Seite ab
export const getDiscoverListings = (req, res) => {
    // Ruft Listings vom Typ 'Entdeckung' ab
    const popularDiscoveries = Listing.find({ type: 'Entdeckung', tag: 'Beliebt' });
    
    // Simuliere die Modal-Logik (Qualitätsüberprüfung)
    console.log('[CONTROLLER] Entdeckungen-Qualitätsprüfung simuliert.');

    res.json({
        discoveries: popularDiscoveries,
        qualityChecked: true // Signalisiert dem Frontend, dass die Qualität überprüft wurde
    });
};

// Verarbeitet die Wunschlisten-Funktionalität
export const toggleWishlist = (req, res) => {
    const { listingId } = req.body;
    // In einer echten App: Benutzer-ID aus dem Token/Session abrufen
    const userId = 'user-123';
    
    // Simuliere das Abrufen des Benutzers
    // const user = User.findById(userId);
    // const status = user.toggleWishlist(listingId); 
    const status = 'added'; // Simuliere Hinzufügen

    console.log(`[CONTROLLER] Listing ${listingId} auf Wunschliste von ${userId} gesetzt/entfernt: ${status}`);

    res.json({ 
        message: `Listing erfolgreich zur Wunschliste ${status}.`, 
        status: status 
    });
};

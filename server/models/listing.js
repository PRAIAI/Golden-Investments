// Simuliertes Schema für Unterkünfte und Entdeckungen
// Enthält alle notwendigen Felder, um die Kartenansichten zu befüllen.

class Listing {
    constructor(id, title, price, location, rating, type) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.location = location;
        this.rating = rating; // 0.0 - 5.0
        this.type = type; // 'Unterkunft' oder 'Entdeckung'
        this.host_type = 'Private:r Gastgeber:in'; // z.B. 'Private:r Gastgeber:in'
    }

    static find(query) {
        // Simuliere die Abfrage der Datenbank basierend auf der Suche/Filterung
        console.log(`[MODEL] Listings gefunden mit Query: ${JSON.stringify(query)}`);
        
        // Simuliere Rückgabe von 2 Beispielen für die Startseite
        return [
            new Listing('101', 'Unterkunft in Angelbachtal', 85, 'Heidelberg', 4.89, 'Unterkunft'),
            new Listing('102', 'Ein Spaziergang durch die Geschichte Münchens', 27, 'München', 4.96, 'Entdeckung')
        ];
    }

    static findById(id) {
        // Simuliere das Abrufen eines einzelnen Listings
        return new Listing(id, `Beispiel Eintrag ${id}`, 100, 'Zürich', 4.5, 'Unterkunft');
    }
}

export default Listing;

// Simuliertes MongoDB/Mongoose-Schema für Benutzer
// Speichert die Wunschlisten-IDs (Listing IDs) des Benutzers.

class User {
    constructor(id, email, passwordHash) {
        this.id = id;
        this.email = email;
        this.passwordHash = passwordHash;
        this.wishlist_ids = []; // Array von Listing-IDs
    }

    static findByEmail(email) {
        // Simuliere die Suche in der Datenbank
        console.log(`[MODEL] Suche Benutzer mit E-Mail: ${email}`);
        return null; // Kein Benutzer gefunden
    }

    static save(user) {
        // Simuliere das Speichern in der Datenbank
        console.log(`[MODEL] Benutzer gespeichert: ${user.id}`);
    }
    
    // Methode zum Hinzufügen/Entfernen von Einträgen zur Wunschliste
    toggleWishlist(listingId) {
        const index = this.wishlist_ids.indexOf(listingId);
        if (index > -1) {
            this.wishlist_ids.splice(index, 1);
            return 'removed';
        } else {
            this.wishlist_ids.push(listingId);
            return 'added';
        }
    }
}

export default User;

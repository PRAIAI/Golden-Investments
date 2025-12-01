// Simuliertes Schema für Services (Fotografie, Köch:innen, etc.)
// Enthält Felder für die Qualitätsüberprüfung (implizit durch 'is_verified').

class Service {
    constructor(id, name, availableCount, isVerified) {
        this.id = id;
        this.name = name;
        this.availableCount = availableCount; // Anzahl verfügbarer Anbieter
        this.isVerified = isVerified; // Qualitätsüberprüfung (Fachkenntnisse, Reputation)
    }

    static findAll() {
        // Simuliere die Abfrage aller Services
        console.log('[MODEL] Alle Services abgerufen.');
        return [
            new Service('S01', 'Fotografie', 2, true),
            new Service('S02', 'Köch:innen', 0, true) // Bald verfügbar
        ];
    }
}

export default Service;1

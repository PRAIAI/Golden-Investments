// Definiert die Farben und Stile der Golden Investments App.
// Das Airbnb-Rot/Rosa wird durch das gewünschte Babyblau/Telegram Blau ersetzt.

export const Colors = {
    // Telegram Blau / Babyblau
    PRIMARY_BLUE: '#2EA7EE', 
    SECONDARY_BLUE: '#90CAF9', // Hellere Schattierung
    TEXT_DARK: '#222222',
    TEXT_LIGHT: '#FFFFFF',
    BACKGROUND: '#FFFFFF',
    BORDER_GREY: '#DDDDDD',
    RATING_STAR: '#FFC700' // Goldgelb für Sterne
};

export const Styles = {
    // Globale Stile können hier definiert werden
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    // Stil für den Haupt-Action-Button (z.B. "Weiter", "Log-in")
    primaryButton: {
        backgroundColor: Colors.PRIMARY_BLUE,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    primaryButtonText: {
        color: Colors.TEXT_LIGHT,
        fontWeight: 'bold',
        fontSize: 16,
    }
};

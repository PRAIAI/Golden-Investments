// Simuliert die Benutzeranmeldung, indem E-Mail und Passwort geprüft werden.

/**
 * Simuliert einen Login-API-Aufruf.
 * @param {string} email Die vom Benutzer eingegebene E-Mail.
 * @param {string} password Das vom Benutzer eingegebene Passwort.
 * @returns {Promise<object>} Löst mit Benutzerdaten auf oder lehnt mit einem Fehler ab.
 */
export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        // Verzögerung simulieren, um API-Latenz nachzuahmen
        setTimeout(() => {
            if (email === "test@golden.de" && password === "Passwort123") {
                // Erfolgreiche Anmeldung
                resolve({ 
                    userId: 'user-123', 
                    email: email, 
                    token: 'mock-jwt-token' 
                });
            } else {
                // Fehler bei der Anmeldung
                reject(new Error("Ungültige E-Mail-Adresse oder Passwort."));
            }
        }, 800);
    });
};

/**
 * Simuliert eine Abmeldung.
 */
export const logout = () => {
    // In einer echten App würde hier der Token entfernt und ggf. das Backend benachrichtigt.
    console.log("Benutzer abgemeldet.");
    return Promise.resolve(true);
};
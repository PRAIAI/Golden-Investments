import User from '../models/User.js';

// Verarbeitet die Login-Anfrage
export const login = (req, res) => {
    const { loginType, identifier, password } = req.body; // loginType: phone, email, google, apple
    
    console.log(`[AUTH] Login-Versuch über: ${loginType} für ${identifier}`);
    
    // Hier würde die Datenbankabfrage und Passwortüberprüfung stattfinden
    const existingUser = User.findByEmail(identifier); 

    if (!existingUser) {
        // Simuliere erfolgreiches Login/Token-Erstellung
        return res.status(200).json({ 
            message: 'Login erfolgreich simuliert.',
            token: `jwt-token-for-${identifier}`,
            userId: 'user-123'
        });
    }

    // In einer echten App: Überprüfung der Anmeldedaten und Erstellung eines JWT
    res.status(401).json({ message: 'Ungültige Anmeldeinformationen.' });
};

// Verarbeitet die Registrierungsanfrage
export const register = (req, res) => {
    const { identifier, password } = req.body;
    
    console.log(`[AUTH] Registrierungsversuch für: ${identifier}`);
    
    // In einer echten App: Überprüfung, ob Benutzer existiert, Hashing des Passworts, Speichern
    const newUser = new User('new-' + Date.now(), identifier, 'hashed-pw');
    User.save(newUser);
    
    res.status(201).json({ 
        message: 'Registrierung erfolgreich simuliert.',
        token: `jwt-token-for-${identifier}`,
        userId: newUser.id
    });
};

<<<<<<< HEAD
// server/server.js
// Dies simuliert die Verbindung zur Datenbank
=======
// Importiert die Datenbank-Client-Bibliothek (z.B. MongoDB/Mongoose oder SQL/Sequelize)
// Hier wird eine einfache Konsolenmeldung zur Simulation der Datenbankverbindung verwendet.

>>>>>>> origin/gh-pages
const connectDB = async () => {
    try {
        // Simuliere die Verbindung zur Datenbank
        console.log('[DB] Verbinde mit der Golden Investments Datenbank...');
<<<<<<< HEAD
        // In einer echten App: await mongoose.connect(process.env.MONGO_URI, { ... });
        console.log('[DB] Verbindung erfolgreich hergestellt.');
    } catch (error) {
        console.error('[DB ERROR] Datenbankverbindung fehlgeschlagen:', error.message);
=======
        
        // In einer echten App:
        // await mongoose.connect(process.env.MONGO_URI, { ... });
        
        console.log('[DB] Verbindung erfolgreich hergestellt.');
    } catch (error) {
        console.error('[DB ERROR] Datenbankverbindung fehlgeschlagen:', error.message);
        // Beende den Prozess bei einem Verbindungsfehler
>>>>>>> origin/gh-pages
        process.exit(1); 
    }
};

<<<<<<< HEAD
// Importiere Express und starte den Server
import express from 'express';
// Wichtig: Da du Express verwendest, muss deine package.json "type": "module" enthalten,
// oder du musst CommonJS (require/module.exports) verwenden.
// Hier gehen wir von einer modernen ES-Modulstruktur aus.

connectDB(); // Simuliere die Datenbankverbindung

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server läuft und ist verbunden!');
});

app.listen(PORT, () => {
    console.log(`[SERVER] Golden Investments Backend läuft auf Port ${PORT}`);
});

// Der ursprüngliche export-Befehl war falsch platziert, da du den Server direkt startest.
// Wenn du export default connectDB; benötigst, füge bitte "type": "module" in die package.json ein.
=======
export default connectDB;l
>>>>>>> origin/gh-pages

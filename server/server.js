// server/server.js
// Dies simuliert die Verbindung zur Datenbank
const connectDB = async () => {
    try {
        // Simuliere die Verbindung zur Datenbank
        console.log('[DB] Verbinde mit der Golden Investments Datenbank...');
        // In einer echten App: await mongoose.connect(process.env.MONGO_URI, { ... });
        console.log('[DB] Verbindung erfolgreich hergestellt.');
    } catch (error) {
        console.error('[DB ERROR] Datenbankverbindung fehlgeschlagen:', error.message);
        process.exit(1); 
    }
};

// Importiere Express und starte den Server
import express from 'express';
// Wichtig: Da du Express verwendest, muss deine package.json "type": "module" enthalten,
// oder du musst CommonJS (require/module.exports) verwenden.
// Hier gehen wir von einer modernen ES-Modulstruktur aus.

connectDB(); // Simuliere die Datenbankverbindung

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    // Korrigiert: "läuft" statt "luft"
    res.send('Server läuft und ist verbunden!');
});

app.listen(PORT, () => {
    // Korrigiert: "läuft" statt "luft"
    console.log(`[SERVER] Golden Investments Backend läuft auf Port ${PORT}`);
});

// Korrigiert: "ursprüngliche" statt "ursprngliche"
// Der ursprüngliche export-Befehl war falsch platziert, da du den Server direkt startest.
// Wenn du export default connectDB; benötigst, füge bitte "type": "module" in die package.json ein.

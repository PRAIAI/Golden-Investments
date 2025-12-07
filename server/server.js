 // server/server.js

// Dies simuliert die Verbindung zur Datenbank



// Importiere Express und starte den Server

import express from 'express';

// Wichtig: Die package.json muss "type": "module" enthalten, da 'import' verwendet wird.



/**

 * Simuliert die asynchrone Verbindung zur Datenbank.

 * Bei einem Fehler wird der Prozess beendet.

 */

const connectDB = async () => {

    try {

        // Simuliere die Verbindung zur Datenbank

        console.log('[DB] Verbinde mit der Golden Investments Datenbank...');



        // In einer echten App: await mongoose.connect(process.env.MONGO_URI, { ... });



        console.log('[DB] Verbindung erfolgreich hergestellt.');

    } catch (error) {

        console.error('[DB ERROR] Datenbankverbindung fehlgeschlagen:', error.message);

        // Beende den Prozess bei einem Verbindungsfehler

        process.exit(1);

    }

};



// 1. Simuliere die Datenbankverbindung

connectDB();



// 2. Initialisiere und starte den Express Server

const app = express();

const PORT = process.env.PORT || 5000;



app.get('/', (req, res) => {

    res.send('Server läuft und ist verbunden!');

});



app.listen(PORT, () => {

    console.log(`[SERVER] Golden Investments Backend läuft auf Port ${PORT}`);

});

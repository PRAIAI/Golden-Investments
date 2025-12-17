import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const isSimulationMode = process.env.DB_SIMULATION_MODE === 'true';

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    if (isSimulationMode) {
        try {
            console.log('[DB] Verbinde mit der Golden Investments Datenbank (TEST-MODUS)...');
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            console.log('[DB] Verbindung erfolgreich hergestellt (TEST-/MOCK-MODUS).');
            return true;
        } catch (error) {
            console.error('[DB ERROR] Datenbankverbindung fehlgeschlagen (TEST-MODUS):', error.message);
            process.exit(1);
        }
    } else {
        try {
            if (!MONGO_URI) {
                throw new Error("MONGO_URI ist nicht definiert.");
            }
            console.log('[DB] Verbinde mit der Golden Investments Datenbank (PRODUKTION)...');
            await mongoose.connect(MONGO_URI);
            console.log('[DB] Verbindung erfolgreich hergestellt (PRODUKTION).');
            return true;
        } catch (error) {
            console.error('[DB ERROR] Datenbankverbindung fehlgeschlagen (PRODUKTION):', error.message);
            process.exit(1);
        }
    }
};

connectDB().then(() => {
    app.listen(PORT, () => {
        const mode = isSimulationMode ? 'TEST-MODUS' : 'PRODUKTION';
        console.log(`[SERVER] Golden Investments Backend läuft auf Port ${PORT} (Modus: ${mode})`);
    });
});

app.get('/', (req, res) => {
    const dbStatus = isSimulationMode 
        ? 'Test-/Mock-Verbindung aktiv und OK' 
        : (mongoose.connection.readyState === 1 ? 'Verbunden (PRODUKTION)' : 'Nicht verbunden');

    res.json({
        message: 'Golden Investments Server läuft!',
        modus: isSimulationMode ? 'Test-/Mock-Modus' : 'Echter Datenbank-Modus (PRODUKTION)',
        dbStatus: dbStatus
    });
});
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
    try {
        if (isSimulationMode) {
            console.log('[DB] TEST-MODUS aktiv.');
            return true;
        }
        if (!MONGO_URI) throw new Error("MONGO_URI fehlt in .env");
        await mongoose.connect(MONGO_URI);
        console.log('[DB] Verbindung PRODUKTION steht.');
    } catch (err) {
        console.error('[DB ERROR]', err.message);
        process.exit(1);
    }
};

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`[SERVER] Läuft auf Port ${PORT}`);
    });
});

app.get('/', (req, res) => {
    res.json({ status: 'Server läuft!' });
});
// Importiert die Datenbank-Client-Bibliothek (z.B. MongoDB/Mongoose oder SQL/Sequelize)
// Hier wird eine einfache Konsolenmeldung zur Simulation der Datenbankverbindung verwendet.

const connectDB = async () => {
    try {
        // Simuliere die Verbindung zur Datenbank
        console.log('[DB] Verbinde mit der Golden Investments Datenbank...');
        
        // In einer echten App:
        // await mongoose.connect(process.env.MONGO_URI, { ... });
        
        console.log('[DB] Verbindung erfolgreich hergestellt.');
    } catch (error) {
        console.error('[DB ERROR] Datenbankverbindung fehlgeschlagen:', error.message);
        // Beende den Prozess bei einem Verbindungsfehler
        process.exit(1); 
    }
};

export default connectDB;l

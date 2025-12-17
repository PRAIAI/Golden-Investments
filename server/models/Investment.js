const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definiert das Schema für eine einzelne Investition (z.B. eine Aktie, eine Kryptowährung)
const InvestmentSchema = new Schema({
    // Der eindeutige Bezeichner der Investition (z.B. 'AAPL' für Apple)
    symbol: {
        type: String,
        required: true,
        unique: true
    },
    // Der vollständige Name des Unternehmens oder Assets
    name: {
        type: String,
        required: true
    },
    // Die aktuelle Menge, die der Benutzer hält
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    // Der durchschnittliche Kaufpreis pro Einheit
    averagePrice: {
        type: Number,
        required: true,
        default: 0
    },
    // Der aktuelle Marktwert pro Einheit (kann später von einer externen API gefüllt werden)
    currentPrice: {
        type: Number,
        default: 0
    },
    // Datum der letzten Aktualisierung
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Exportiert das Modell, damit es in den Routen verwendet werden kann
module.exports = mongoose.model('Investment', InvestmentSchema);
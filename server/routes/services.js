import Service from '../models/Service.js';

// Ruft Services-Kategorien ab
export const getServices = (req, res) => {
    const services = Service.findAll();
    
    // Simuliere die Modal-Logik (Qualitätsüberprüfung)
    console.log('[CONTROLLER] Services-Qualitätsprüfung simuliert.');

    res.json({
        services: services,
        qualityChecked: true // Signalisiert dem Frontend, dass die Qualität überprüft wurde
    });
};

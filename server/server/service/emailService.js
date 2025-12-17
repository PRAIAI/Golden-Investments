const axios = require('axios');
require('dotenv').config();

// Die URL Ihrer Master-SMTP Extension. 
// Dies muss die Adresse sein, die Ihr Master-System für den E-Mail-Versand bereitstellt.
const SMTP_EXTENSION_URL = process.env.SMTP_EXTENSION_URL || 'http://localhost:5001/send-email';

/**
 * Sendet eine E-Mail über die Master-SMTP Extension.
 * @param {string} recipient - Die E-Mail-Adresse des Empfängers.
 * @param {string} subject - Der Betreff der E-Mail.
 * @param {string} body - Der HTML- oder Textinhalt der E-Mail.
 */
async function sendEmail(recipient, subject, body) {
    console.log(`Versuche E-Mail an ${recipient} über ${SMTP_EXTENSION_URL} zu senden...`);
    
    try {
        // Simuliert eine POST-Anfrage an Ihre Master-SMTP Extension
        const response = await axios.post(SMTP_EXTENSION_URL, {
            to: recipient,
            subject: subject,
            html: body,
            // Hier könnten weitere Authentifizierungstoken für Ihre Master-Sicherheit eingebaut werden
            authKey: process.env.MASTER_AUTH_KEY 
        });

        if (response.status === 200) {
            console.log('E-Mail erfolgreich über SMTP Extension gesendet.');
            return true;
        } else {
            console.error(`E-Mail-Senden fehlgeschlagen mit Status: ${response.status}`);
            return false;
        }
    } catch (error) {
        console.error('Fehler beim Aufruf der Master-SMTP Extension:', error.message);
        // Im Falle eines Fehlers, den Fehler an den Aufrufer weiterleiten
        throw new Error('Konnte Master-SMTP Extension nicht erreichen.');
    }
}

module.exports = { sendEmail };
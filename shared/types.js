// Grundlegende Datentypen und Strukturen (für Typ-Checking, z.B. in TypeScript oder JSDoc).

/**
 * @typedef {Object} Listing
 * @property {string} id - Eindeutige ID des Eintrags.
 * @property {string} title - Titel der Unterkunft/Entdeckung.
 * @property {number} price - Preis pro Nacht/Gast.
 * @property {string} location - Standort.
 * @property {number} rating - Durchschnittliche Bewertung (0-5).
 * @property {string} image_url - Link zum Hauptbild.
 * @property {boolean} is_favorite - Ob es auf der Wunschliste des aktuellen Benutzers ist.
 */

/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} name - Name des Services (z.B. Fotografie, Köch:innen).
 * @property {number} available_count - Anzahl verfügbarer Anbieter.
 * @property {string} description
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} username
 * @property {string} email
 * @property {string[]} wishlist_ids - Array von Listing IDs.
 */

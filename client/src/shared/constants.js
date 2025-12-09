// --- Allgemeine Projekt-Konstanten ---

// Hauptfarbschema: Babyblau / Telegram Blau (Beibehalten aus Originalcode)
export const THEME_COLOR = '#2EA7EE';

// API-Endpunkte (Beibehalten aus Originalcode)
export const API_ENDPOINTS = {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LISTINGS_HOME: '/api/listings/home',
    DISCOVER_ALL: '/api/listings/discover',
    SERVICES_ALL: '/api/services',
    WISHLIST: '/api/user/wishlist'
};

// Benutzerrollen (Beibehalten aus Originalcode)
export const USER_ROLES = {
    GUEST: 'GUEST',
    HOST: 'HOST',
    SERVICE_PROVIDER: 'SERVICE_PROVIDER'
};

// --- "Golden Investments" App-spezifische Konstanten ---

export const INVESTMENT_CATEGORIES = [
    "Aktien",
    "Immobilien",
    "Rohstoffe",
    "Kryptowährungen",
    "Fonds"
];

export const MOCK_INVESTMENTS = [
    {
        id: 1,
        name: "Tech-Sektor Global",
        category: "Aktien",
        ytdReturn: 15.45,
        riskLevel: "Hoch",
        status: "Aktiv",
        volume: 50000
    },
    {
        id: 2,
        name: "Mietobjekte Berlin",
        category: "Immobilien",
        ytdReturn: 4.88,
        riskLevel: "Mittel",
        status: "Gesperrt",
        volume: 120000
    },
    {
        id: 3,
        name: "Ethereum-Basket",
        category: "Kryptowährungen",
        ytdReturn: -8.10,
        riskLevel: "Sehr Hoch",
        status: "Aktiv",
        volume: 15000
    },
    {
        id: 4,
        name: "Gold Futures",
        category: "Rohstoffe",
        ytdReturn: 2.15,
        riskLevel: "Niedrig",
        status: "Aktiv",
        volume: 35000
    },
    {
        id: 5,
        name: "Nachhaltigkeitsfonds",
        category: "Fonds",
        ytdReturn: 7.90,
        riskLevel: "Mittel",
        status: "Aktiv",
        volume: 80000
    },
    {
        id: 6,
        name: "US-Blue Chip",
        category: "Aktien",
        ytdReturn: 12.30,
        riskLevel: "Mittel",
        status: "Aktiv",
        volume: 65000
    },
];
// Konstanten, die sowohl von Frontend als auch Backend genutzt werden können.

// Hauptfarbschema: Babyblau / Telegram Blau
export const THEME_COLOR = '#2EA7EE';

// API-Endpunkte
export const API_ENDPOINTS = {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LISTINGS_HOME: '/api/listings/home',
    DISCOVER_ALL: '/api/listings/discover',
    SERVICES_ALL: '/api/services',
    WISHLIST: '/api/user/wishlist'
};

// Benutzerrollen
export const USER_ROLES = {
    GUEST: 'GUEST',
    HOST: 'HOST',
    SERVICE_PROVIDER: 'SERVICE_PROVIDER'
};

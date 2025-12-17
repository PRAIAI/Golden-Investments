import React, { useState, useEffect } from 'react';

// Import der Shared-Konstanten
// Hier würden wir eigentlich die Komponenten und Screens importieren
import { PRIMARY_BLUE } from '../shared/constants';

// --- Placeholder-Komponenten (werden später durch die eigentlichen Screens ersetzt) ---

// 4.3.1 Home Screen Placeholder
const Home = ({ setCurrentPage }) => (
  <div className="p-4 sm:p-8 space-y-4">
    <h1 className="text-3xl font-bold text-gray-800">🏡 Willkommen bei Golden Investments</h1>
    <p className="text-gray-600">Dies ist die Startseite (Home). Hier erscheinen Suchleiste und Listings.</p>
    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg" role="alert">
      <p className="font-bold">Status-Hinweis:</p>
      <p>Um die App zu sehen, müssen alle Screens und Komponenten (4.2 & 4.3) erstellt werden.</p>
    </div>
  </div>
);

// 4.3.4 Wishlist Screen Placeholder
const Wishlist = () => (
    <div className="p-4 sm:p-8 text-center">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">💖 Wunschlisten</h2>
        <p className="text-gray-500">Logge dich ein, um deine Favoriten zu speichern.</p>
    </div>
);

// 4.3.5 Auth Screen Placeholder
const Auth = () => (
    <div className="p-4 sm:p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">👤 Einloggen / Registrieren</h2>
        <p className="text-gray-500">Authentifizierungs-Formular kommt hier hin.</p>
    </div>
);

// 4.2.2 FooterNav Component Placeholder
const FooterNav = ({ currentPage, setCurrentPage }) => {
    const navItems = [
        { name: 'Erkunden', icon: '🔍', page: 'home' },
        { name: 'Wunschlisten', icon: '💖', page: 'wishlist' },
        { name: 'Einloggen', icon: '👤', page: 'auth' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-10">
            <div className="flex justify-around max-w-lg mx-auto">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => setCurrentPage(item.page)}
                        className={`flex flex-col items-center justify-center p-3 sm:p-4 text-xs font-medium transition-colors duration-200 
                            ${currentPage === item.page ? `text-[${PRIMARY_BLUE}]` : 'text-gray-500 hover:text-gray-700'}`}
                        style={{ color: currentPage === item.page ? PRIMARY_BLUE : 'currentColor' }}
                    >
                        <span className="text-xl mb-0.5">{item.icon}</span>
                        {item.name}
                    </button>
                ))}
            </div>
        </nav>
    );
};

// 4.2.1 Header Component Placeholder
const Header = () => (
    <header className="sticky top-0 z-20 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold" style={{ color: PRIMARY_BLUE }}>
                Golden Investments
            </h1>
            {/* Hier würden später der User-Avatar und Notifications hinkommen */}
            <div className="text-gray-600">...</div>
        </div>
    </header>
);

// --- Haupt-App Komponente (4.1.1) ---
const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    // Funktion zur Steuerung der Bildschirmanzeige (simuliertes Routing)
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
            case 'discover':
            case 'services':
                // Wir verwenden Home als temporären Standard für alle Entdeckungsseiten
                return <Home setCurrentPage={setCurrentPage} />;
            case 'wishlist':
                return <Wishlist />;
            case 'auth':
                return <Auth />;
            default:
                return <Home setCurrentPage={setCurrentPage} />;
        }
    };

    // Tailwind CSS Setup (angenommen, dass es im HTML geladen wird)
    return (
        <div className="min-h-screen pb-20 bg-gray-50">
            <Header />
            <main className="max-w-7xl mx-auto">
                {renderPage()}
            </main>
            <FooterNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default App;
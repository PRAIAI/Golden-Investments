import React, { useState, useEffect } from 'react';
import { RefreshCw, TrendingUp, DollarSign, Zap } from 'lucide-react';

const App = () => {
    const [investments, setInvestments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = 'http://localhost:5000/api/investments';

    useEffect(() => {
        const fetchInvestments = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setInvestments(data);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Konnte Daten vom Server nicht laden. Stellen Sie sicher, dass der Node-Server läuft (Port 5000).");
            } finally {
                setLoading(false);
            }
        };

        fetchInvestments();
    }, []);

    const InvestmentCard = ({ item }) => {
        const getRiskColor = (risk) => {
            if (risk.includes('High')) return 'bg-red-500 text-white';
            if (risk.includes('Medium')) return 'bg-yellow-500 text-gray-900';
            return 'bg-green-500 text-white';
        };

        return (
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-indigo-600" />
                    {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{item.details}</p>
                
                <div className="grid grid-cols-3 gap-2 text-center border-t pt-4 mt-4">
                    <div>
                        <p className="text-xs font-medium text-gray-400">Kategorie</p>
                        <p className="font-semibold text-sm text-indigo-600">{item.category}</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-400">Risiko</p>
                        <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${getRiskColor(item.risk)}`}>
                            {item.risk}
                        </span>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-400">Rendite (YTD)</p>
                        <p className="font-bold text-lg text-green-600">{item.return}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans p-4 md:p-8">
            <header className="max-w-7xl mx-auto mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 flex items-center">
                    <DollarSign className="w-8 h-8 mr-3 text-indigo-600" />
                    Golden Investments Dashboard
                </h1>
                <p className="text-gray-500 mt-2">Übersicht der verfügbaren Anlageprodukte, bereitgestellt vom Backend-Server.</p>
            </header>

            <main className="max-w-7xl mx-auto">
                {loading && (
                    <div className="text-center p-10 bg-white rounded-xl shadow-md">
                        <RefreshCw className="w-8 h-8 text-indigo-500 animate-spin mx-auto mb-4" />
                        <p className="text-lg text-gray-700">Lade Investitionsdaten...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Fehler: </strong>
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {investments.map(item => (
                            <InvestmentCard key={item.id} item={item} />
                        ))}
                    </div>
                )}
                
                {!loading && !error && investments.length === 0 && (
                    <div className="text-center p-10 bg-yellow-50 rounded-xl border border-yellow-200">
                        <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                        <p className="text-lg text-yellow-700">Keine Investitionsdaten gefunden.</p>
                    </div>
                )}
            </main>

            <footer className="text-center mt-12 text-sm text-gray-400 border-t pt-4 max-w-7xl mx-auto">
                Daten bereitgestellt über den Node.js Server auf Port 5000.
            </footer>
        </div>
    );
};

export default App;
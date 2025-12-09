import React, { useState } from 'react';
import { login } from '../services/authService';

/**
 * LoginScreen - Verwaltet das Anmeldeformular und die Authentifizierungsversuche.
 * @param {function} onLoginSuccess Callback-Funktion, die bei erfolgreichem Login aufgerufen wird.
 */
function LoginScreen({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const userData = await login(email, password);
      // Ruft die Callback-Funktion in App.js auf, um den globalen State zu aktualisieren
      onLoginSuccess(userData);
    } catch (err) {
      setError(err.message || 'Ein unbekannter Fehler ist aufgetreten.');
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Anmelden bei Golden Investments</h2>
        <p className="login-hint">Test-Zugang: test@golden.de / Passwort123</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Passwort</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          
          <button type="submit" className="button-primary" disabled={isLoading}>
            {isLoading ? 'Wird angemeldet...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
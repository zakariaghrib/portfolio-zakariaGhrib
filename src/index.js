import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom'; // Importer BrowserRouter
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider> {/* Envelopper App */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
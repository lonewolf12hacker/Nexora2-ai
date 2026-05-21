import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Mounts the React engine directly to the HTML structural layer
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element. Ensure index.html has <div id="root"></div>');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

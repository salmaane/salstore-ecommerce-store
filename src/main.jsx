import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FiltersProvider } from './contexts/FiltersContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>,
)

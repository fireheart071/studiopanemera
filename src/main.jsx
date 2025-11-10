import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Register service worker for caching media (images/videos)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // Registration successful
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((err) => {
        console.warn('Service Worker registration failed:', err);
      });
  });
}

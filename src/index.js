import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then((registration) => {
          console.log('Сервис-воркер зарегистрирован:', registration);
        })
        .catch((registrationError) => {
          console.log('Ошибка регистрации сервис-воркера:', registrationError);
        });
    });
  }
const CACHE_NAME = 'react-app-cache-v1';  // Имя кэша
const URLS_TO_CACHE = [
    '/'
];

// Установка (install) сервис-воркера
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Открыт кэш');
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

// Активация (activate) сервис-воркера и очистка старых кэшей
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Удаление старого кэша', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Обработка запросов (fetch)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;  // Возвращаем кэшированные данные
                }
                return fetch(event.request);  // Иначе делаем запрос в сеть
            })
    );
});
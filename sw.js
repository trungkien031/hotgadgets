const CACHE_NAME = 'hot-gadgets-v2';
const DYNAMIC_CACHE_NAME = 'hot-gadgets-dynamic-v2';
const MAX_DYNAMIC_CACHE_SIZE = 50; // Giới hạn 50 tài nguyên trong cache động

// Danh sách tài nguyên tĩnh để cache khi cài đặt
const urlsToCache = [
    '/',
    '/index.html',
    '/script.js',
    '/style.css',
    '/offline.html',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    // Cache một số hình ảnh mẫu từ thư mục images (đảm bảo chúng tồn tại)
    '/images/iphone_15_pro_max.png',
    '/images/macbook_air_m3.png',
    '/images/apple_watch_series_9.png',
    '/images/airpods_pro_2.png',
    '/images/samsung_galaxy_s24_ultra.png',
    '/images/dell_xps_13.png',
    // Placeholder SVG làm fallback
    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📱</text></svg>'
];

// Sự kiện install: Cache các tài nguyên tĩnh
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching static assets at', new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }));
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting()) // Kích hoạt Service Worker ngay sau khi cài đặt
    );
});

// Sự kiện activate: Dọn dẹp cache cũ và kích hoạt Service Worker mới
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME, DYNAMIC_CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => self.clients.claim()) // Kiểm soát ngay các trang đang mở
    );
});

// Sự kiện fetch: Xử lý yêu cầu tài nguyên
self.addEventListener('fetch', event => {
    // Bỏ qua các yêu cầu không phải GET hoặc không an toàn
    if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
        event.respondWith(fetch(event.request));
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Nếu tìm thấy trong cache, trả về ngay
                if (response) {
                    return response;
                }

                // Nếu không, lấy từ mạng và lưu vào cache động
                return fetch(event.request)
                    .then(networkResponse => {
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Lưu bản sao vào cache động
                        caches.open(DYNAMIC_CACHE_NAME).then(cache => {
                            cache.keys().then(keys => {
                                if (keys.length >= MAX_DYNAMIC_CACHE_SIZE) {
                                    cache.delete(keys[0]); // Xóa tài nguyên cũ nhất
                                }
                            });
                            cache.put(event.request, networkResponse.clone());
                        });

                        return networkResponse;
                    })
                    .catch(() => {
                        // Fallback cho trang chính khi offline
                        if (event.request.mode === 'navigate') {
                            return caches.match('/offline.html');
                        }
                        // Fallback cho hình ảnh
                        if (event.request.url.match(/\.(png|jpg|jpeg|svg)$/)) {
                            return caches.match('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📱</text></svg>');
                        }
                    });
            })
    );
});
const CACHE_NAME = "birthday-be-gai-v8";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",

    "./images/cover.jpg",
    "./images/birthday-cake.png",

    "./images/01.jpg",
    "./images/02.jpg",
    "./images/03.jpg",
    "./images/04.jpg",
    "./images/05.jpg",
    "./images/gallery-01.jpg",
    "./images/gallery-02.jpg",
    "./images/gallery-03.jpg",
    "./images/gallery-04.jpg",
    "./images/gallery-05.jpg",
    "./images/gallery-06.jpg",
    "./images/gallery-07.jpg",
    "./images/gallery-08.jpg",
    "./fonts/UVF-Lavanderia-Regular.ttf",
    "./fonts/Baloo2-Regular.ttf",
    "./fonts/Baloo2-Medium.ttf",
    "./fonts/Baloo2-SemiBold.ttf",
    "./fonts/Baloo2-Bold.ttf",
    "./fonts/Baloo2-ExtraBold.ttf",

    "./music/birthday.mp3"
];


/* CÀI CACHE */

self.addEventListener(
    "install",
    event => {

        event.waitUntil(
            caches
                .open(CACHE_NAME)
                .then(cache => {
                    return cache.addAll(
                        FILES_TO_CACHE
                    );
                })
        );

        self.skipWaiting();
    }
);


/* KÍCH HOẠT */

self.addEventListener(
    "activate",
    event => {

        event.waitUntil(

            caches
                .keys()
                .then(cacheNames => {

                    return Promise.all(

                        cacheNames.map(
                            cacheName => {

                                if (
                                    cacheName !==
                                    CACHE_NAME
                                ) {
                                    return caches.delete(
                                        cacheName
                                    );
                                }

                            }
                        )

                    );

                })

        );

        self.clients.claim();
    }
);


/* CHẠY OFFLINE */

self.addEventListener(
    "fetch",
    event => {

        event.respondWith(

            caches
                .match(event.request)
                .then(cachedResponse => {

                    if (
                        cachedResponse
                    ) {
                        return cachedResponse;
                    }

                    return fetch(
                        event.request
                    );

                })

        );

    }
);
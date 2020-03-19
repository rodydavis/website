                        importScripts("/assets/js/workbox-v3.6.2/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.2"});

            self.__precacheManifest = [{"url":"//index.html","revision":"32211090ffd9c0f71108a5ce45529df3"},{"url":"//one-codebase-many-places/","revision":"c9deb2c9a1cd5bba3e497669939824f0"},{"url":"//automate-flutter-apps/","revision":"896365bf8fb779389a52a989ff792ff5"},{"url":"//2019/03/12/making-a-piano/","revision":"c473fa3bbc43eae77dbc713fa8d3607a"},{"url":"//flutter-one-click-release/","revision":"6f95d5db07224f0c62d6d7e0eaf7bc22"},{"url":"//the-pitch-pipe/","revision":"4f70a224917831cceee0c379ade5b2c5"}];
            // service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Rody Davis',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);

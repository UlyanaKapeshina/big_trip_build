const CACHE_NAME = `BIG_TRIP_CACHE`;

self.addEventListener(`install`, (evt) => {
  evt.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.addAll([
            `./`,
            `./index.html`,
            `./css/style.css`,
            `./bundle.js`,
            `./img/icons/bus.png`,
            `./img/icons/check-in.png`,
            `./img/icons/drive.png`,
            `./img/icons/flight.png`,
            `./img/icons/restaurant.png`,
            `./img/icons/ship.png`,
            `./img/icons/sightseeing.png`,
            `./img/icons/taxi.png`,
            `./img/icons/train.png`,
            `./img/icons/transport.png`,
            `./img/icons/trip.png`,
            `./img/header-bg.png`,
            `./img/header-bg@2x.png`,
            `./img/logo.png`,
          ]);
        })
  );
});

self.addEventListener(`fetch`, (evt) => {
  evt.respondWith(
      caches.match(evt.request)
        .then((response) => {
          return response ? response : fetch(evt.request);
        })
        .catch((err) => {
          throw err;
        })
  );
});

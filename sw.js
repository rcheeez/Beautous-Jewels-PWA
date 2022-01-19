self.addEventListener("install", e =>{
    console.log("Install!");
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./", "./css/style.css", "./images/beautous-jewels-carousel.png", "./images/beautous-jewels-logo.png","./images/beautous-jewels-icon-512.png"]);
        })
    );
})

self.addEventListener("fetch", e =>{
    console.log(`Fetch ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(res =>{
            return res || fetch(e.request);
        })
    );
})

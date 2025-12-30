self.addEventListener('install',e=>{
 e.waitUntil(caches.open('platformer').then(c=>c.addAll([
  'index.html','game.html','manifest.json'
 ])));
});
self.addEventListener('fetch',e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});

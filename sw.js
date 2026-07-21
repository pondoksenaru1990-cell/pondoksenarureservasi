if (event.request.url.includes('firebaseio.com')) {
  return event.respondWith(fetch(event.request));
}
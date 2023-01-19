import('./bootstrap');

// basic serviceWorker for Progressive Web App experience (PWA), provided out-of-the-box by https://github.com/googlechrome/workbox
// if you need more custom setup (e.g. Push API), take a look at https://developer.chrome.com/docs/workbox/reference/workbox-webpack-plugin/#type-InjectManifest
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

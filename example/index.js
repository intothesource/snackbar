import { Snackbar } from '../snackbar.js';

const triggerAppleNotification = () => {
    Snackbar('An apple a day keeps your mom at bay', 2000, 'eat apple', appleCallback);
}

const triggerBananaNotification = () => {
    Snackbar('Bananas something something', 4000, 'eat banana', bananaCallback);
}

const appleCallback = () => {
    document.body.querySelector('[data-callback-output]').innerHTML += "🍎";
}

const bananaCallback = () => {
    document.body.querySelector('[data-callback-output]').innerHTML += "🍌";
}

window.triggerAppleNotification = triggerAppleNotification
window.triggerBananaNotification = triggerBananaNotification

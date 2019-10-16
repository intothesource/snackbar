import { Snackbar } from '../snackbar.js';

const frikandelSpeciaal = () => {
    Snackbar('An apple a day and such', 'eat apple', 100);
}

const broodjeKroket = () => {
    Snackbar('Bananas something something', 'eat banana', 3000);
}

window.frikandelSpeciaal = frikandelSpeciaal;
window.broodjeKroket = broodjeKroket;

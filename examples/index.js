import { Snackbar } from '../snackbar.js';

const frikandelSpeciaal = () => {
    Snackbar('An apple a day and such', 'eat apple', 1000);
    Snackbar('Bananas something something', 'eat banana', 4000);
}

window.frikandelSpeciaal = frikandelSpeciaal;

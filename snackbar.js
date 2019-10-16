import { WIDTH_MOBILE, WIDTH_DESKTOP, DATA_CONTAINER, DATA_CONTENT, DATA_BUTTON } from './constants.js'

const snackbarArray = [];
let snackbarLooperBusy = false;
let snackbarDelay = 300;

export const Snackbar = (content, button, timeout) => {
    if (content && timeout) {
        snackbarArray.push({
            'element': createSnackbar(content, button),
            'time': timeout,
        });

        if (!snackbarLooperBusy) {
            snackbarLooper();
        }
    } else throw "No content or time provided for snackbar!";
}

const snackbarLooper = () => {
    snackbarLooperBusy = true;
    showSnackbar(snackbarArray[0]);
    setTimeout(() => {
        removeSnackbar();
        snackbarArray.shift();
        if (snackbarArray.length === 0) {
            snackbarLooperBusy = false;
        } else {
            setTimeout(() => {
                snackbarLooper();
            }, snackbarDelay);
        }
    }, snackbarArray[0].time);
}

const showSnackbar = snackObject => {
    if (document && snackObject) {
        document.body.appendChild(snackObject.element);
    }
}

const removeSnackbar = () => {
    if (document.body.querySelector(`[${DATA_CONTAINER}]`)) {
        document.body.querySelector(`[${DATA_CONTAINER}]`).remove();
    }
}

const createSnackbar = (content, button, timeout) => {
    let snackbar = createContainerElement();
    snackbar.appendChild(createContentElement(content));
    if (button) {
        snackbar.appendChild(createButtonElement(button));
    }
    return snackbar;
}

const createContainerElement = () => {
    let snackbarContainerElement = document.createElement('div');
    snackbarContainerElement.setAttribute(DATA_CONTAINER, '');
    return snackbarContainerElement;
}

const createContentElement = (content) => {
    let snackbarContentElement = document.createElement('span');
    snackbarContentElement.setAttribute(DATA_CONTENT, '');
    snackbarContentElement.innerHTML = content;
    return snackbarContentElement;
}

const createButtonElement = (button) => {
    let snackbarButtonElement = document.createElement('button');
    snackbarButtonElement.setAttribute(DATA_BUTTON, '');
    snackbarButtonElement.innerHTML = button;
    return snackbarButtonElement;
}

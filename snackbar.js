import { WIDTH_MOBILE, WIDTH_DESKTOP, DATA_CONTAINER, DATA_CONTENT, DATA_BUTTON } from './constants.js'

const snackbarArray = [];
let snackbarLooperBusy = false;
let snackbarDelay = 300;

export const Snackbar = (content, timeout, button, callback) => {
    if (content && timeout) {
        snackbarArray.push({
            'element': createSnackbar(content, button, callback),
            'time': timeout,
        });

        if (!snackbarLooperBusy) {
            snackbarLooper();
        }
    } else throw 'No content or time provided for snackbar!';
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
            }, snackbarDelay + getTransitionDelay());
        }
    }, snackbarArray[0].time + getTransitionDelay());
}

const showSnackbar = snackObject => {
    if (document && snackObject) {
        document.body.appendChild(snackObject.element);
        setTimeout(() => {
            document.body.querySelector(`[${DATA_CONTAINER}]`).classList.add('active');
        });
    }
}

const removeSnackbar = () => {
    if (document.body.querySelector(`[${DATA_CONTAINER}]`)) {
        document.body.querySelector(`[${DATA_CONTAINER}]`).classList.remove('active');
        setTimeout(() => {
            document.body.querySelector(`[${DATA_CONTAINER}]`).remove();
        }, getTransitionDelay());
    }
}

const createSnackbar = (content, button, callback) => {
    let snackbar = createContainerElement();
    snackbar.appendChild(createContentElement(content));
    if (button && callback) {
        snackbar.appendChild(createButtonElement(button, callback));
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

const createButtonElement = (button, callback) => {
    if (button && callback) {
    let snackbarButtonElement = document.createElement('button');
    snackbarButtonElement.setAttribute(DATA_BUTTON, '');
    snackbarButtonElement.addEventListener('click', callback);
    snackbarButtonElement.innerHTML = button;
    return snackbarButtonElement;
    } else throw 'A callback or button text is missing';
    
}

const getTransitionDelay = () => {
    // Get transition time if set
    let transitionStyling = JSON.stringify(getComputedStyle(document.body.querySelector(`[${DATA_CONTAINER}]`)).transition);
    let transitionDelay = 0;
    if (transitionStyling) {
        // Parse transition delay and convert to ms
        transitionDelay = parseFloat(transitionStyling.split(' ')[1]) * 1000;
    }
    return transitionDelay
}

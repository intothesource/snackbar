import {WIDTH_MOBILE, WIDTH_DESKTOP, DATA_CONTAINER, DATA_CONTENT, DATA_BUTTON } from './constants.js'

let snackArray = [];

export const Snackbar = (content, button, timeout) => {
    if (content && timeout) {
        snackArray.push({
            'element': createSnackbar(content, button),
            'time': timeout,
        });
        console.log(snackArray);
        showSnackbar();
        
    } else throw "No content or time provided for snackbar!";
}

const showSnackbar = () => {
    if (document && snackArray.length) {
        snackArray.forEach((snackbarObject, index) => {
            document.body.appendChild(snackbarObject.element);
            snackArray.splice(index, index + 1);
            setTimeout(() => {
                snackbarObject.element.remove();
            }, snackbarObject.time);
        })
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



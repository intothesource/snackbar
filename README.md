# @intothesource/snackbar

Small fadein notifications

## Example

```javascript
import { Snackbar } from '../snackbar.js';
const triggerNotification = () => {
    Snackbar('Notification text', 6000, 'button text', Callback);
}
```
and
```css
[data-its-snackbar] {
  position: absolute;
  width: fit-content;
  left: 0;
  right: 0;
  bottom: -100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  transition: bottom 400ms ease-in-out;
}

[data-its-snackbar].active {
    bottom: 20%;
}
```
for a material style snackbar you can use or modify this
```css
[data-its-snackbar] {
  position: absolute;
  width: fit-content;
  left: 0;
  right: 0;
  bottom: -100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  background: #323232;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  font-size: 14px;
  transition: bottom 400ms ease-in-out;
}

[data-its-snackbar].active {
    bottom: 20%;
}

[data-its-snackbar-content] {
  padding: 14px;
}

[data-its-snackbar-button] {
  padding: 7px 8px;
  margin: 7px 8px;
  height: 36px;
  background: none;
  border: none;
  text-transform: uppercase;
  line-height: 10px;
  font-weight: 500;
}
```

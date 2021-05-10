/* global XMLHttpRequest */
export default function deleteButton(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url, true);
    xhr.responseType = 'json';
    xhr.send();
}

export default function deleteApiRequest(url, id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url + id.toString());
    xhr.send();
};

const BASE_URL = 'http://localhost:51039';


export function getValues() {
    const url = `${BASE_URL}/api/values`;
    return fetch(url, { mode: 'cors'}).then(response => response.data);
}

export function getAdminValues() {
    const url = `${BASE_URL}/api/adminvalues`;
    return fetch(url, { mode: 'cors'}).then(response => response.data);
}

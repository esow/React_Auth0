
export function getValues() {
    let data = fetch("http://localhost:51039/api/values").then(function(response){
        return response.json();
    });
}

export function getAdminValues() {
    let data = fetch("http://localhost:51039/api/values", ).then(response => response.data);
}

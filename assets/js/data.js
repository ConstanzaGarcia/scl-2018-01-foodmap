window.callRestaurant = () => {
    // resultado de la función, lo que haga el fetch
    return fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyBQearEk9C4QkT-lWKttFnXZgeonntEqaQ&callback=initMap').then((response) => {
        // si existe respuesta, que me la de en formato json
        if (response.ok) {
            return response.json();
            // si no existe respuesta arroja error
        } else {
            throw new Error('La llamada a la API falló');
        }
        // ahora pedire el dato,si hay dato damelo en la variable respuestaJson
    }).then((respuestaJson) => {
        return respuestaJson;
        // todo lo que no funcione capturalo como error
    }).catch((err) => {
        console.error(err);
    });
};
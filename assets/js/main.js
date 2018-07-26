// Cargando pantalla 
setTimeout(function hide() {
    $('#iniciando').hide('fast');
    document.getElementById('mapaPantallaUno').style.display = 'block';
}, 3000);

// Funciones del mapa

// variables que vamos a trabajar 


let initMap;
let service;
let infowindow;

//Iniciando Mapa


function initMap() {
    // localizando Santiago
    let city = { lat: -33.4569, lng: -70.648 };
    // The map, centered at city
    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: city });
    // The marker, positioned at city
    let marker = new google.maps.Marker({ position: city, map: map });

    //Localiza nuestra posición

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -33.4569, lng: -70.648 },
            zoom: 15
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }


    // busca lo que queremos 

    function initialize() {
        let pyrmont = new google.maps.LatLng(-33.4569, -70.648);
        map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15
        });

        let request = {
            location: pyrmont,
            radius: '500',
            type: ['restaurant']
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                let place = results[i];
                createMarker(results[i]);
            }
        }
    }

}
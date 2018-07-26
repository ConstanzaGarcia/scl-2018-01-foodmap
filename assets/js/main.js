// Cargando pantalla 

setTimeout(function hide() {
    $('#iniciando').hide('fast');
    document.getElementById('mapaPantallaUno').style.display = 'block';
}, 3000);


// Marcamos un lugar en el mapa

// function initMap() {
//     // The location of city
//     var city = { lat: -33.4569, lng: -70.648 };
//     // The map, centered at city
//     var map = new google.maps.Map(
//         document.getElementById('map'), { zoom: 15, center: city });
//     // The marker, positioned at city
//     var marker = new google.maps.Marker({ position: city, map: map });
// }


let map;
let service;
let infowindow;

//Iniciando Mapa


function initMap() {
    // The location of city
    var pyrmont = { lat: -33.4569, lng: -70.648 };
    // The map, centered at city
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: pyrmont });
    // The marker, positioned at city
    var marker = new google.maps.Marker({ position: pyrmont, map: map });





    // const city = { lat: -33.4569, lng: -70.648 };
    // map = new google.maps.Map(document.getElementById('map'), {
    //     center: pyrmont,
    //     zoom: 15
    // });

    // let map = new google.maps.Map(
    //     document.getElementById('map'), { zoom: 15, center: city });

    infoWindow = new google.maps.InfoWindow();
    let service = new google.maps.places.PlacesService(map);
    service.textSearch({
        location: pyrmont,
        radius: '500',
        type: 'restaurant',
        query: inputSearch,
    }, callback);



    const callback = (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                let place = results[i];
                createMarker(results[i]);
            }
        }

    }




    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
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

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }



};
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
    // Buscami posición con el GP
    navigator.geolocation.getCurrentPosition(function (position) {

        lat = position.coords.latitude;
        lng = position.coords.longitude;

        var myLatlng = new google.maps.LatLng(lat, lng);
        var mapPlace = {
            center: myLatlng,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.roadmap //roadmap: muestra la vista predeterminada del mapa de carreteras. Este es el tipo de mapa predeterminado.
        };

        map = new google.maps.Map(document.getElementById('map'), mapPlace)
        // // Ubicando - iniciando mapa
        // map = new google.maps.Map(document.getElementById('map'), {
        //     center: { lat: -33.4569, lng: -70.648 },
        //     zoom: 15

        // })

        infoWindow = new google.maps.InfoWindow;

        var request = {
            location: myLatlng,
            radius: '500',
            type: ['food'],
            key: 'AIzaSyBQearEk9C4QkT-lWKttFnXZgeonntEqaQ',
        };

        //crear service
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);


        function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    createMarker(results[i]);


                }

            }

        };



    })

}

function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: place.geometry.location, // responde a la busqueda de lugares 
        // icon: '../img/utensils.png',
    });
    marker.addListener('click', toggleBounce);


    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    // marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(this.content);
        infowindow.open(map, this);
    });
}




// // const city = { lat: -33.4569, lng: -70.648 };
// // map = new google.maps.Map(document.getElementById('map'), {
// //     center: pyrmont,
// //     zoom: 15
// // });

// // let map = new google.maps.Map(
// //     document.getElementById('map'), { zoom: 15, center: city });

// infoWindow = new google.maps.InfoWindow();
// let service = new google.maps.places.PlacesService(map);
// service.textSearch({
//     location: pyrmont,
//     radius: '500',
//     type: ['restaurant'],
//     query: inputSearch,
// }, callback);



// const callback = (results, status) => {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//         for (let i = 0; i < results.length; i++) {
//             let place = results[i];
//             createMarker(results[i]);
//         }
//     }

// }




// // Try HTML5 geolocation.
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         var pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         };

//         infoWindow.setPosition(pos);
//         infoWindow.setContent('Location found.');
//         infoWindow.open(map);
//         map.setCenter(pos);
//     }, function () {
//         handleLocationError(true, infoWindow, map.getCenter());
//     });
// } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//         'Error: The Geolocation service failed.' :
//         'Error: Your browser doesn\'t support geolocation.');
//     infoWindow.open(map);
// }



//         };

// // // The marker, positioned at city
// // let marker = new google.maps.Marker({ position: city, map: map });

// // //Localiza nuestra posición

// // // const initMap() {
// // // map = new google.maps.Map(document.getElementById('map'), {
// // //     center: { lat: -33.4569, lng: -70.648 },
// // //     zoom: 15
// // // });
// // // infoWindow = new google.maps.InfoWindow;

// // // Try HTML5 geolocation.
// // if (navigator.geolocation) {
// //     navigator.geolocation.getCurrentPosition(const (position) {
// //         let pos = {
// //             lat: position.coords.latitude,
// //             lng: position.coords.longitude
// //         };

// //         infoWindow.setPosition(pos);
// //         infoWindow.setContent('Location found.');
// //         infoWindow.open(map);
// //         map.setCenter(pos);
// //     }, const () {
// //         handleLocationError(true, infoWindow, map.getCenter());
// //     });
// // } else {
// //     // Browser doesn't support Geolocation
// //     handleLocationError(false, infoWindow, map.getCenter());
// // }
// // }

// // const handleLocationError(browserHasGeolocation, infoWindow, pos) {
// //     infoWindow.setPosition(pos);
// //     infoWindow.setContent(browserHasGeolocation ?
// //         'Error: The Geolocation service failed.' :
// //         'Error: Your browser doesn\'t support geolocation.');
// //     infoWindow.open(map);
// // }


// // // busca lo que queremos 

// // const initialize() {
// //     let santiago = new google.maps.LatLng(-33.4569, -70.648);
// //     map = new google.maps.Map(document.getElementById('map'), {
// //         center: santiago,
// //         zoom: 15
// //     });

// //     let request = {
// //         location: santiago,
// //         radius: '500',
// //         type: ['restaurant']
// //     };

// //     service = new google.maps.places.PlacesService(map);
// //     service.nearbySearch(request, callback);
// // }

// // const callback(results, status) {
// //     if (status == google.maps.places.PlacesServiceStatus.OK) {
// //         for (let i = 0; i < results.length; i++) {
// //             let place = results[i];
// //             createMarker(results[i]);
// //         }
// //     }
// // }

// //         }


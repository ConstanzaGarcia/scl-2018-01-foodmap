function initMap() {
    // The location of city
    var city = { lat: -33.4569, lng: -70.648 };
    // The map, centered at city
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: city });
    // The marker, positioned at city
    var marker = new google.maps.Marker({ position: city, map: map });
}


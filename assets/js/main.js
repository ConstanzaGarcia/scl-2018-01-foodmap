function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(
            -33.4569, -70.648),
        zoom: 8,
    };
    var map = new google.maps.Map(document.getElementById("mapGoogle"), mapProp);
}

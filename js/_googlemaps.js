function initialize() {
    var myLatlng = new google.maps.LatLng(37.3761862,-122.03071970000002);
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Hello World!'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
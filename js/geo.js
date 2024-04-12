window.onload = function() {
    if (!navigator.geolocation) {
        document.getElementById('geoLocation').textContent = "Geolocation is not supported by your browser.";
        return;
    }
    navigator.geolocation.getCurrentPosition(function(position) {
        document.getElementById('latitude').textContent = position.coords.latitude;
        document.getElementById('longitude').textContent = position.coords.longitude;
    }, function(error) {
        document.getElementById('geoLocation').textContent = "Geolocation is not supported by your browser or location access is denied.";
    });
}
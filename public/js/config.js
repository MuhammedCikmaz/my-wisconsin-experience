// public/js/config.js
const MAP_CONFIG = {
    center: { lat: 43.0766, lng: -89.4125 }, // UW-Madison coordinates
    zoom: 18,
    tilt: 45,
    heading: 0,
    mapTypeId: 'satellite',
    // Enable 3D buildings
    building: true,
    // Enable all gesture handling
    gestureHandling: 'greedy',
    // Add control options
    controlSize: 32,
    mapTypeControl: true,
    streetViewControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
};

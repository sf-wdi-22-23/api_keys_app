// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.773972, lng: -122.431297},
    zoom: 10
  });
});
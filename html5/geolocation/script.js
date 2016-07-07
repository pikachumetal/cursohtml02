//https://plnkr.co/edit/hfOAKLpTLXr9DGeEtG2Q?p=preview
(function(global) {
  var h = document.querySelector('h1');

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(geo) {
    h.innerText = geo.coords.latitude + ', ' + geo.coords.longitude;
  }

  function error(data) {
    alert(data);
  }

  navigator.geolocation
      .getCurrentPosition(success, error, options);

})(this);

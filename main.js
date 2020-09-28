// with a click on a button, display on page the location of the user (longitude and latitude) using the watchPosition() method
//meaning - it will be updated if and when the user moves to a different location while they are moving

function displayLocatioOnTheGo() {
    setInterval(() => {
        const location = document.getElementById("location");
        const userLocation = navigator.geolocation.watchPosition(position => {
            location.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
        })
    }, 5000);
}

displayLocatioOnTheGo()

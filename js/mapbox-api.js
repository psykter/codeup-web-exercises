$(() => {

    // Global variables
    const map = initializeMapbox();
    const marker = createMarker();
    const popup = createPopup();

    // Functions
    // Function that initializes the map
    function initializeMapbox() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: "map",
            style: "mapbox://styles/mapbox/streets-v12",
            zoom: 10,
            center: [-98.4916, 29.4252],
        }

        return new mapboxgl.Map(mapOptions);
    }
    // Function that adds a marker at Codeup to the map
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4260])
            .addTo(map);
    }

    // Function that adds a popup to the marker
    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.489615, 29.426827])
            .setHTML(' <div> <h1>Codeup</h1> <p>600 Navarro St #600, San Antonio, TX 78205</p> </div>').addTo(map);

    };

    // Function that brings me to Paris
    function goToParis() {
    gecode('Paris', MAPBOX_TOKEN).then((data) => {
        console.log(data);
        map.setCenter(data);
        })
    }

    // Function that uses reverse gecode
    // Takes the coordinates from the center of the map
    // and print on the screen the address
    function reverseGeocode() {
    const coords = map.getCenter();
    console.log(coords);
    reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
        console.log(data);
        document.querySelector('h1').innerHTML = '${data}';
        });
    }
    // Function that uses geocode to take the string 'Alamo' and
    // get the coordinates to set a marker and a popup at that location
    function markAlamo() {
        geocode('Alamo', MAPBOX_TOKEN).then((data) => {
            const alamoPopup = new mapboxgl.Popup()
                .setHTML('<p>Remember the Alamo!</p>');
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(alamoPopup);
            alamoPopup.addTo(map);
        });
    }
    function findAndPrintAddress() {
    const coords = map.getCenter();
        reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
            console.log(data);
            document.querySelector('h1').innerHTML = '${data}';
        });
    }

    //Events
    document.querySelector('#geicode-btn').addEventListener('click', goToParis)
    document.querySelector('#reverse-gecode-button').addEventListener('click', reverseGeocode);
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo);

    // Runs when the map loads
    map.setZoom(1);
    marker.setPopup(popup);

});

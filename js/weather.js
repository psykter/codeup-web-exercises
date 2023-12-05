//      >>>>>>>>>>>>>>>>>>>>>>>>  IFFE Wrapper  <<<<<<<<<<<<<<<<<<<<<<<<    //
document.addEventListener('DOMContentLoaded', function() {
    (function () {
        "use strict";

//      >>>>>>>>>>>>>>>>>>  Base URL for forecast API  <<<<<<<<<<<<<<<<<    //
        const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

//      >>>>>>>>>  Create URL for request based on coordinates  <<<<<<<<    //
        function getWeatherURL(lat, lon) {
            return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}&units=imperial`;
        }

        const WEATHER_COORDINATES = ['29.4260', '-98.4861'];

        let URL = getWeatherURL(...WEATHER_COORDINATES);

        const Day1 = document.querySelector('.day1');
        const Day2 = document.querySelector('.day2');
        const Day3 = document.querySelector('.day3');
        const Day4 = document.querySelector('.day4');
        const Day5 = document.querySelector('.day5');
        const searchInput = document.querySelector('input');
        let forecastLocationName = document.querySelector('#forecastName');
        forecastLocationName.innerText = `San Antonio, Texas`

//      >>>>>>>>>  Function to handle city search autocomplete  <<<<<<<<    //
        function handleAutocomplete() {
            const citySearchInput = document.getElementById('input-find');
            const suggestionsDropdown = document.getElementById('autocomplete-suggestions');
//      >>>>>>>>>>>>>>>  Event listener for input changes  <<<<<<<<<<<<<    //
            citySearchInput.addEventListener('input', () => {
                const searchText = citySearchInput.value.trim();
//      >>>>>>>  Mapbox Geocoding API request for autocomplete   <<<<<<<    //
//      >>>>>>>>>>>>>>>  suggestions in country=US,CA,MX  <<<<<<<<<<<<<<    //
                fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${MAPBOX_TOKEN}&country=US,CA,MX`)
                    .then(response => response.json())
                    .then(data => {
//      >>>>>>>>>>>>>>>>>>  Clear previous suggestions  <<<<<<<<<<<<<<<<    //
                        suggestionsDropdown.innerHTML = '';
//      >>>>>>>  Update suggestions dropdown / create a new one  <<<<<<<    //
                        for (let i = 0; i < Math.min(5, data.features.length); i++) {
                            const suggestion = document.createElement('div');
                            suggestion.className = 'autocomplete-suggestion';
                            suggestion.textContent = data.features[i].place_name;
//      >>>>>>>>>>>>  Event listener for suggestion click  <<<<<<<<<<<<    //
                            suggestion.addEventListener('click', () => {
                                citySearchInput.value = data.features[i].place_name;
                                suggestionsDropdown.innerHTML = '';
//      >>>>>>>>>>  You can also update the weather based on  <<<<<<<<<    //
//      >>>>>>>>>>>>>>>>  the selected suggestion here  <<<<<<<<<<<<<<<    //
                            });
                            suggestionsDropdown.appendChild(suggestion);
                        }
                    })
                    .catch(error => console.error(error));
            });
        }
//      >>>>>>>>>>>>>>>  Call the autocomplete function  <<<<<<<<<<<<<    //
        handleAutocomplete();

        const formFind = document.getElementById('form-find');
        const btnHome = document.getElementById('btn-home');
//      >>>>>>>>>>>>  Event listener for form submission  <<<<<<<<<<<<    //
        formFind.addEventListener('submit', (event) => {
            event.preventDefault();
            const searchText = document.getElementById('input-find').value.trim();
            console.log(`Searching for city: ${searchText}`);
        });
//      >>>>>>>>>>>  Event listener for Home button click  <<<<<<<<<<    //
        btnHome.addEventListener('click', () => {
            // You can add the logic to reset the weather to the default location or perform any other action
            console.log('Home button clicked');
        });
//      >>>>>>>>>  GET function in case of a failed request  <<<<<<<<    //
        function runAjax() {
            $.ajax({
                url: URL,
                type: 'GET',
            }).done((data) => {
                let weatherArray = [];
                let minMaxTemps = returnMinMaxTemps(data);
                let icons = [];

                data.list.forEach((day, index) => {
                    if (index % 8 === 0) {
                        weatherArray.push(day.weather[0].description)
                        icons.push(day.weather[0].icon)
                    }
                });
                showWeather(weatherArray, icons);
                showDatesAndTemps(minMaxTemps);
            })
                .fail(console.error);
        }

        runAjax();
//      >>>>>>>>>>>>>  Display current date/temperature  <<<<<<<<<<<<    //
        function showDatesAndTemps(minMaxTemps) {
//      >>>>>>>>>>>>>  Updates HTML with requested data  <<<<<<<<<<<<    //
            Day1.lastElementChild.firstElementChild.innerText = `${minMaxTemps[0].date}:\n\n ${parseInt(minMaxTemps[0].max)} ℉`;
//      >>>>>>>>>>>>>>>>>  Display the next 4 days  <<<<<<<<<<<<<<<<<    //
            Day2.lastElementChild.firstElementChild.innerHTML = `${minMaxTemps[1].date}:<br>Min: ${parseInt(minMaxTemps[1].min)} ℉<br>Max: ${parseInt(minMaxTemps[1].max)} ℉`;
            Day3.lastElementChild.firstElementChild.innerHTML = `${minMaxTemps[2].date}:<br>Min: ${parseInt(minMaxTemps[2].min)} ℉<br>Max: ${parseInt(minMaxTemps[2].max)} ℉`;
            Day4.lastElementChild.firstElementChild.innerHTML = `${minMaxTemps[3].date}:<br>Min: ${parseInt(minMaxTemps[3].min)} ℉<br>Max: ${parseInt(minMaxTemps[3].max)} ℉`;
            Day5.lastElementChild.firstElementChild.innerHTML = `${minMaxTemps[4].date}:<br>Min: ${parseInt(minMaxTemps[4].min)} ℉<br>Max: ${parseInt(minMaxTemps[4].max)} ℉`;
        }
//      >>>>>>>>>>  Btn Click gets weather and updates map <<<<<<<<<<    //
        function showWeather(weatherArray, icons) {
            Day1.lastElementChild.lastElementChild.innerText = weatherArray[0];
            Day1.firstElementChild.firstElementChild.src = `https://openweathermap.org/img/wn/${icons[0]}@4x.png`;

            Day2.lastElementChild.lastElementChild.innerText = weatherArray[1];
            Day2.firstElementChild.firstElementChild.src = `https://openweathermap.org/img/wn/${icons[1]}@4x.png`;

            Day3.lastElementChild.lastElementChild.innerText = weatherArray[2];
            Day3.firstElementChild.firstElementChild.src = `https://openweathermap.org/img/wn/${icons[2]}@4x.png`;

            Day4.lastElementChild.lastElementChild.innerText = weatherArray[3];
            Day4.firstElementChild.firstElementChild.src = `https://openweathermap.org/img/wn/${icons[3]}@4x.png`;

            Day5.lastElementChild.lastElementChild.innerText = weatherArray[4];
            Day5.firstElementChild.firstElementChild.src = `https://openweathermap.org/img/wn/${icons[4]}@4x.png`;
        }
//      >>>>>>>>  Create URL for request based on coordinates  <<<<<<<    //
        document.querySelector('button').addEventListener('click', () => {
            geocode(searchInput.value, MAPBOX_TOKEN).then((coors) => {
                URL = getWeatherURL(coors[1], coors[0]);
                runAjax();
                forecastLocationName.innerText = searchInput.value
                map.setCenter([coors[0], coors[1]]);
                marker.setLngLat([coors[0], coors[1]]).addTo(map);
                searchInput.value = '';
            })
        })
//      >>>>>>>>>>>>>>>>>>>>  Mapbox access token <<<<<<<<<<<<<<<<<<<<    //
        mapboxgl.accessToken = MAPBOX_TOKEN;
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/navigation-night-v1",
            zoom: 10,
            center: [-98.4916, 29.4252]
        });
        const marker = new mapboxgl.Marker({draggable: true}).setLngLat([-98.4916, 29.4252]).addTo(map);
        window.map = map;

        marker.on('dragend', () => {
            const lngLat = marker.getLngLat();
            URL = getWeatherURL(lngLat.lat, lngLat.lng);
            runAjax();
            reverseGeocode(lngLat, MAPBOX_TOKEN).then((data) => {
                forecastLocationName.innerText = data;
            });
        });
//      >>>>>>>>>>>>>>  Adds zoom and rotation controls  <<<<<<<<<<<<    //
        map.addControl(new mapboxgl.NavigationControl());

           //      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Rain layer  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    //
        //      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Code taken from:  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    //
// >>>>>>>> https://github.com/rainviewer/rainviewer-api-example/blob/master/rainviewer-mapbox-example.html  <<<<<<<< //
        map.on("load", () => {
            fetch("https://api.rainviewer.com/public/weather-maps.json")
                .then(res => res.json())
                .then(apiData => {
                    apiData.radar.past.forEach(frame => {
                        map.addLayer({
                            id: `rainviewer_${frame.path}`,
                            type: "raster",
                            source: {
                                type: "raster",
                                tiles: [
                                    apiData.host + frame.path + '/256/{z}/{x}/{y}/2/1_1.png'
                                ],
                                tileSize: 256
                            },
                            layout: {visibility: "none"},
                            minzoom: 0,
                            maxzoom: 12
                        });
                    });
//      >>>>>>>>>>  Iterates through radar frames, adjusting  <<<<<<<<    //
//      >>>>>>>>  visibility and opacity for animation on map  <<<<<<<    //
                    let i = 0;
                    const interval = setInterval(() => {
                        if (i > apiData.radar.past.length - 1) {
                            clearInterval(interval);
                            return;
                        } else {
                            apiData.radar.past.forEach((frame, index) => {
                                map.setLayoutProperty(
                                    `rainviewer_${frame.path}`,
                                    "visibility",
                                    index === i || index === i - 1 ? "visible" : "none"
                                );
                            });
                            if (i - 1 >= 0) {
                                const frame = apiData.radar.past[i - 1];
                                let opacity = 1;
                                setTimeout(() => {
                                    const i2 = setInterval(() => {
                                        if (opacity <= 0) {
                                            return clearInterval(i2);
                                        }
                                        map.setPaintProperty(
                                            `rainviewer_${frame.path}`,
                                            "raster-opacity",
                                            opacity
                                        );
                                        opacity -= 0.1;
                                    }, 50);
                                }, 400);
                            }
                            i += 1;
                        }
                    }, 2000);
                })
                .catch(console.error);
        });
//      >>>>>>>>>  Loops through 40 three hour blocks of forecast  <<<<<<<<   //
//      >>>>>  then creates a new temperature object for each new day  <<<<   //
        function returnMinMaxTemps({list}) {
            const minMaxTempDays = [];
            list.forEach(({dt_txt, main: {temp_max, temp_min}}) => {
                const [date, time] = dt_txt.split(' '); // splits the date time string
                if (minMaxTempDays.length === 0 || time.startsWith('00')) { // add a new forecast day for each new date
                    minMaxTempDays.push({date, min: temp_min, max: temp_max});
                } else {
                    // replace the current days min and max temps if a higher max or lower min is found throughout the day
                    const currentMinMaxTemp = minMaxTempDays[minMaxTempDays.length - 1];
                    const {min, max} = currentMinMaxTemp;
                    if (min > temp_min) currentMinMaxTemp.min = temp_min;
                    if (max < temp_max) currentMinMaxTemp.max = temp_max;
                }
            });
            return minMaxTempDays;
        }
//      >>>>>>>>  Sends request, retrives and extracts coordinates  <<<<<<    //
        function geocode(search, token) {
            let baseUrl = 'https://api.mapbox.com';
            let endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
                .then(function (res) {
                    return res.json();
                    // to get all the data from the request, comment out the following three lines...
                }).then(function (data) {
                    return data.features[0].center;
                });
        }
        /***
         * reverseGeocode is a method to search for a physical address based on inputted coordinates
         * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
         * @param {string} token is your API token for MapBox
         * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
         *
         * EXAMPLE:
         *
         *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
         *      // do something with results
         *  })
         *
         */
        function reverseGeocode(coordinates, token) {
            let baseUrl = 'https://api.mapbox.com';
            let endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
                .then(function (res) {
                    return res.json();
                })
                // to get all the data from the request, comment out the following three lines...
                .then(function (data) {
                    return data.features[0].place_name;
                });
        }

    })();
});
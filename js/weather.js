//      >>>>>>>>>>>>>>>>>>>>  IFFE Wrapper  <<<<<<<<<<<<<<<<<<<<    //
document.addEventListener('DOMContentLoaded', function() {
    (function () {
        "use strict";

//      >>>>>>>>>>>>>>>>>>>>  Base URL for forecast API  <<<<<<<<<<<<<<<<<<<<    //
        const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

//      >>>>>>>>>>>>>>>>>>>>  Create URL for request based on coordinates  <<<<<<<<<<<<<<<<<<<<    //
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

        function showDatesAndTemps(minMaxTemps) {
            Day1.lastElementChild.firstElementChild.innerText = `${minMaxTemps[0].date}:\n\n ${parseInt(minMaxTemps[0].max)} ℉`;
            Day2.lastElementChild.firstElementChild.innerText = `${minMaxTemps[1].date}:\n\n ${parseInt(minMaxTemps[1].max)} ℉`;
            Day3.lastElementChild.firstElementChild.innerText = `${minMaxTemps[2].date}:\n\n ${parseInt(minMaxTemps[2].max)} ℉`;
            Day4.lastElementChild.firstElementChild.innerText = `${minMaxTemps[3].date}:\n\n ${parseInt(minMaxTemps[3].max)} ℉`;
            Day5.lastElementChild.firstElementChild.innerText = `${minMaxTemps[4].date}:\n\n ${parseInt(minMaxTemps[4].max)} ℉`;
        }

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


//      >>>>>>>>>>>>>>>>>>>>  Mapbox  <<<<<<<<<<<<<<<<<<<<    //
        mapboxgl.accessToken = MAPBOX_TOKEN;
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/navigation-night-v1",
            zoom: 5,
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

        // Add zoom and rotation controls to the map.
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

        /**
         * returnMinMaxTemps destructures the OpenWeather 5 Day / 3 Hour Forecast API response to get the daily minimum
         *   and maximum temperatures using a list of 40 three-hour forecast blocks.
         * @param - the data from the API response
         * @returns - an array of objects that represent the minimum and maximum temperature of each forecast day.
         *   Example response:
         *   [
         *      {
         *          "date":"2023-07-14",
         *          "min":97.39,
         *          "max":106.63
         *      },
         *      {
         *          "date":"2023-07-15",
         *          "min":75.79,
         *          "max":105.75
         *      },
         *      etc.
         *   ]
         */
        function returnMinMaxTemps({list}) {
            const minMaxTempDays = [];



              //  >>>>>>>>>>>>>>>>>>>>>>>  Loops through 40 three hour blocks of forecast  <<<<<<<<<<<<<<<<<<<<<<<  //
            //  >>>>>>>>>>>>>>>>>>>>>  then creates a new temperature object for each new day  <<<<<<<<<<<<<<<<<<<<<<  //
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

        /*
            EXAMPLE OF USAGE:

            $.get(OPEN_WEATHER_API_URL)).done(data => {
                    const minMaxTemps = returnMinMaxTemps(data);
                    // use minMaxTemps data as needed
             });

         */

        "use strict";

        /***
         * geocode is a method to search for coordinates based on a physical address and return
         * @param {string} search is the address to search for the geocoded coordinates
         * @param {string} token is your API token for MapBox
         * @returns {Promise} a promise containing the latitude and longitude as a two element array
         *
         * EXAMPLE:
         *
         *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
         *      // do something with results
         *  })
         *
         */
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
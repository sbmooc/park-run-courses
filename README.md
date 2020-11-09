# park-run-courses

A simple Vue based application to collect data about park run courses.

One park run event may have multiple courses. In order to make comparisons about various courses, we need to collect the data about each course. Strava has that data, so all this app does is send the strava segment id to the server which downloads the gpx and stores it in the DB.

Leaflet is used to show the map and the courses, using geoJson to store and show the data.

This is the (server)[https://github.com/sbmooc/park-run-courses-be]

It is currently hosted at parkrun.olimc.co.uk. Continuous deployment is through github workflow, using vue-cli to build the static files.

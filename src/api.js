import axios from "axios";

const getParkRunLocations = (context) => {
    return new Promise((resolve, reject) => {
        axios.get('https://images.parkrun.com/events.json').then(response => {
            const ukSeniorEvents = response.data['events'].features.filter(
                event => event.properties.countrycode == 97
            ).filter(
                event => event.properties.seriesid == 1
            )
            context.commit('updateParkRunLocations', ukSeniorEvents)
            resolve(response);
        }, error => {
            reject(error);
        })
    })
}

const getStravaSegment = (context, segmentId) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.strava.com/stream/segments/${segmentId}`).then(response => {
            console.log(response)
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

export default {getParkRunLocations, getStravaSegment}

import axios from "axios";

const SERVER_URL = 'http://localhost:3000'

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
        axios.post(`${SERVER_URL}/segments/${segmentId}`).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

const postCourse = (context, segmentInfo) => {
    return new Promise((resolve, reject) => {
        console.log(segmentInfo)
        axios.post(`${SERVER_URL}/courses/`, {
            ...segmentInfo
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

const getCourses = (context, eventId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${SERVER_URL}/courses?eventId=${eventId}`).then(
            response => {
            resolve(response)
            }
        ).catch(error => {
            reject(error)
        })
    })
}

export default { getParkRunLocations, getStravaSegment, postCourse, getCourses }

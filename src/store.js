import axios from "axios";
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        parkRunLocations: {}
    },
    mutations: {
        updateParkRunLocations(state, payload) {
            state.parkRunLocations = payload
        }
    },
    actions: {
        collectParkRunLocations(context) {
            return new Promise((resolve, reject) => {
                axios.get('https://images.parkrun.com/events.json').then(response => {
                    let ukSeniorEvents = response.data['events'].features.filter(
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
        },
    }
});

export default store;
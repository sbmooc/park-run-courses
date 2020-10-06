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
                    console.log(response.data['events'].features)
                    let ukEvents = response.data['events'].features.filter(
                        event => event.properties.countrycode == 97
                    )
                    context.commit('updateParkRunLocations', ukEvents)
                    resolve(response);
                }, error => {
                    reject(error);
                })
            })
        },
    }
});

export default store;
import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'
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
    actions: {...api},
    
});

export default store;
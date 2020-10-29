import Vue from 'vue'
import Vuex from 'vuex'
import apiCalls from './api.js'
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
    actions: {...apiCalls},
    
});

export default store;
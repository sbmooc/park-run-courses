import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css'
import store from './store.js'
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store: store
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css'
import store from './store.js'
import * as IconRetina from 'leaflet/dist/images/marker-icon-2x.png' 
import * as IconURL from 'leaflet/dist/images/marker-icon.png'
import * as shadowUrl from 'leaflet/dist/images/marker-shadow.png'
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: IconRetina,
    iconUrl: IconURL,
    shadowUrl: shadowUrl 
});


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store: store
}).$mount('#app')

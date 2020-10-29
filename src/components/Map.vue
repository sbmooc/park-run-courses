<template class="col-xl-8 col-lg-7">
  <div class=map>
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-geo-json v-on:click="greet" v-if="show" :geojson="geojson" :options="options"></l-geo-json>
    </l-map>
  </div>
</template>

<script>""
import { latLng } from "leaflet";
import { LMap, LTileLayer, LGeoJson} from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  computed: {
    options(){
      return {
        onEachFeature: this.onEachFeatureFnc, 
        }
    },
    onEachFeatureFnc() {
      return (feature, layer) => {
        const eventName = feature.properties.EventLocation || feature.propertiesEventShortName
        layer.bindTooltip(
          "<div>" +
            eventName +
            "</div>",
          { permanent: false, sticky: true }
        );
      };
    },
  },
  data() {
    return {
      show: false,
      zoom: 6,
      center: latLng(54.66, -3.44),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      geojson: null,
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
    };
  },
  methods: {
    greet(e){
      this.$root.$emit('selectedParkRunEvent', e)
    },
    centerUpdate(center){
      this.currentCenter = center
    },
    zoomUpdate(zoom){
      this.currentZoom = zoom
    }
  },
  created(){
    this.$store.dispatch('getParkRunLocations').then(() => {
      this.geojson = this.$store.state.parkRunLocations,
      this.show = true
    }
    )
  }
};
</script>

<style scoped>
.map {
  min-height: 100vh;
}
</style>

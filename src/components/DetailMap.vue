<template>
   <div class='map'>
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-geo-json v-if="course" :geojson="course.geometry"></l-geo-json>
    </l-map>
   </div> 
</template>
<script>
import { LMap, LTileLayer, LGeoJson} from "vue2-leaflet";
import { latLng } from "leaflet";
export default {
    name: 'DetailMap',
    components: {
    LMap,
    LTileLayer,
    LGeoJson
    },
    props: {
        coordinates: {
            type: Array,
            required: true
        },
    },
    computed: {},
    data() {
        return {
            course: null,
            zoom: 14,
            center: latLng(this.coordinates[1], this.coordinates[0]),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }
    },
    methods: {},
    mounted() {
      this.$root.$on("selectedParkRunCourse", (course) => {
        this.course = course
      })
    }
}
</script>
<style scoped>
.map{
    height: 30vh;
}
</style>
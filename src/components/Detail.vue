<template>
  <div>
    <div v-if="showDetail" class="card shadow mb-4">
      <div class="card-header py-3">
        {{ this.event.properties.EventLongName }}
      </div>
      <div class="card-img-top">
        <Detail-Map
          v-bind:coordinates="event.geometry.coordinates"
          v-bind:track="test"
          :key="event.id"
        />
      </div>
      <div class="card-body">
        {{ this.event }}
        <ul v-if="courses" class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
    <div v-else class="card shadow mb-4">Select a park run on the map</div>
  </div>
</template>
<script>
import DetailMap from "./DetailMap.vue";
import CPSummerRouteTrack from "../../track.json";
export default {
  name: "Detail",
  components: {
    DetailMap,
  },
  computed: {},
  data() {
    return {
      event: {},
      showDetail: false,
      test: null,
      courses: null
    };
  },
  methods: {
    toggleDisplay() {
      this.showDetail = true;
    },
  },
  mounted() {
    this.$root.$on("selectedParkRunEvent", (event) => {
      this.event = event.sourceTarget.feature;
      if (this.event.id == 154) {
        this.courses = [CPSummerRouteTrack, ];
      }
      this.toggleDisplay();
    });
  },
};
</script>
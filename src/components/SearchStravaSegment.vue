<template>
  <div>
    <form @submit="getStravaSegment" @submit.prevent>
      <div class="form-group">
        <input
          type="number"
          class="form-control"
          aria-describedby="segmentHelp"
          placeholder="strava segment id"
          v-model="segmentId"
        />
        <small id="segmentHelp" class="form-text text-muted"
          >Add a strava segment id here, e.g 956701</small
        >
      </div>
      <div>
      <button type="submit" class="btn btn-primary">Show segment</button>
      <Notification :message="message"/>
      <LoadingError v-bind:error="error" v-bind:loading="loading" />
      </div>
    </form>
  </div>
</template>
<script>
import LoadingError from "./LoadingError.vue";
import Notification from "./Notification.vue";
export default {
  name: "SearchStravaSegment",
  data() {
    return {
      segmentId: null,
      loading: false,
      error: false,
      message: "" 
    };
  },
  components: {
    LoadingError,
    Notification
  },
  computed: {},
  props: {},
  methods: {
    emitCourseGeoJson(course) {
      this.$root.$emit("selectedParkRunCourse", course);
    },
    showCourse(latLng) {
      const lngLat = latLng.map(coordinates => [coordinates[1], coordinates[0]])
      const course = {
            type: "Feature",
            properties: {
              name: "Test123",
            },
            geometry: {
              type: "LineString",
              coordinates: lngLat,
            },
          }
      this.emitCourseGeoJson(course)
      this.$root.$emit("centreDetailMap", latLng[0])
    },
    getStravaSegment() {
      this.error = false;
      this.message = ""
      this.loading = true;
      this.$store
        .dispatch("getStravaSegment", this.segmentId)
        .then((response) => {
          this.loading = false;
          this.message = 'Segment found OK'
          this.showCourse(response.data);
          this.$emit('selectedSegmentId', this.segmentId)
        })
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
    },
  },
  mounted() {},
};
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input {
  width: 50%
}
</style>
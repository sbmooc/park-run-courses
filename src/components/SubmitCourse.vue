<template>
  <div>
    <form @submit="getStravaSegment" @submit.prevent>
      <div class="form-group">
        <label for="exampleInputEmail1">Add a new course</label>
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
      <button type="submit" class="btn btn-primary">Submit</button>
      <div class="spinner-border" role="status" v-if='loading'>
        <span class="sr-only">Loading...</span>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "SubmitCourse",
  data() {
    return {
      segmentId: null,
      loading: false,
      error: true 
    };
  },
  components: {},
  computed: {},
  props: {},
  methods: {
    emitCourseJson(course) {
      this.$root.$emit("selectedParkRunCourse", course);
    },
    getStravaSegment() {
      this.loading = true    
      this.$store
        .dispatch("getStravaSegment", this.segmentId)
        .then(() => {
            this.loading = false
        })
        .catch(() => {
            this.loading = false
            this.error = true
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
</style>
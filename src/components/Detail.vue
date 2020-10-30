<template>
  <div>
    <div v-if="show" class="card shadow mb-4">
      <div class="card-header py-3">
        {{ this.event.properties.EventLongName }}
      </div>
      <div class="card-img-top">
        <Detail-Map
          v-bind:coordinates="event.geometry.coordinates"
          v-bind:courses="courses"
          :key="event.id"
        />
      </div>
      <div class="card-body">
        <SearchStravaSegment />
        <CardList header="Event Courses" v-bind:courses="courses"/> 
        <SubmitCourse />
      </div>

    </div>
    <div v-else class="card shadow mb-4">Select a park run on the map</div>
  </div>
</template>
<script>
import DetailMap from "./DetailMap.vue";
import CardList from "./CardList.vue";
import SearchStravaSegment from "./SearchStravaSegment.vue"
import SubmitCourse from "./SubmitCourse.vue"
export default {
  name: "Detail",
  components: {
    DetailMap,
    CardList,
    SearchStravaSegment,
    SubmitCourse
  },
  computed: {},
  data() {
    return {
      event: {},
      show: false,
      test: null,
      courses: null
    };
  },
  methods: {
    showDetail() {
      this.show= true;
    },
  },
  mounted() {
    const courses = require('../../parkRunCourses.json')
    this.$root.$on("selectedParkRunEvent", (event) => {
      this.event = event.sourceTarget.feature;
      this.courses = null
      if (this.event.id == 154) {
        this.courses = courses.events['154'].features;
      }
      this.showDetail();
    });
  },
};
</script>
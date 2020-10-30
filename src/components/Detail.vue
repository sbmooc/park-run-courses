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
        <CourseList :courses="courses"/> 
        <AddNewCourse :event="event"/>
      </div>

    </div>
    <div v-else class="card shadow mb-4">Select a park run on the map</div>
  </div>
</template>
<script>
import DetailMap from "./DetailMap.vue";
import CourseList from "./CourseList.vue";
import AddNewCourse from "./AddNewCourse.vue"
export default {
  name: "Detail",
  components: {
    AddNewCourse,
    DetailMap,
    CourseList,
  },
  computed: {},
  data() {
    return {
      event: {},
      show: false,
      courses: null,
      selectedSegmentId: null
    };
  },
  methods: {
    killSelectedSegmentId(){
      this.selectedSegmentId = null
    },
    setSelectedSegmentId(selectedSegmentId){
      this.selectedSegmentId = selectedSegmentId
    },
    showDetail() {
      this.show= true;
    },
  },
  mounted() {
    const courses = require('../../parkRunCourses.json')
    this.$root.$on("selectedParkRunEvent", (event) => {
      this.event = event.sourceTarget.feature;
      this.selectedSegmentId = null
      this.courses = null
      if (this.event.id == 154) {
        this.courses = courses.events['154'].features;
      }
      this.showDetail();
    });
  },
};
</script>
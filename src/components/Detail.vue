<template>
  <div>
    <div v-if="show" class="card shadow mb-4">
      <div class="card-header py-3">
        {{ this.event.properties.name}}
      </div>
      <div class="card-img-top">
        <Detail-Map
          v-bind:coordinates="event.geometry.coordinates"
          v-bind:courses="courses"
          :key="event.properties.id"
        />
      </div>
      <div class="card-body">
        <CourseList v-bind:courses="courses" :eventName="event.properties.name"/> 
        <AddNewCourse v-on:newCourseAdded="getCourses" :event="event"/>
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
    getCourses(){
      this.$store.dispatch('getCourses', this.event.properties.id).then(response => {
        this.courses = response.data.features
      })
    }
  },
  mounted() {
    this.$root.$on("selectedParkRunEvent", (event) => {
      this.event = event.sourceTarget.feature;
      this.selectedSegmentId = null
      this.getCourses()
      this.showDetail();
    })
},
};
</script>
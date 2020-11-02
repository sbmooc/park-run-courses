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
        <Notification :message="message"/>
        <CourseList v-bind:courses="courses" :eventName="event.properties.name"/> 
        <AddNewCourse v-on:newCourseAdded="newCourseAdded" :event="event"/>
      </div>

    </div>
    <div v-else class="card shadow mb-4">Select a park run on the map</div>
  </div>
</template>
<script>
import DetailMap from "./DetailMap.vue";
import CourseList from "./CourseList.vue";
import AddNewCourse from "./AddNewCourse.vue"
import Notification from "./Notification.vue"
export default {
  name: "Detail",
  components: {
    AddNewCourse,
    DetailMap,
    CourseList,
    Notification
  },
  computed: {},
  data() {
    return {
      event: {},
      show: false,
      courses: null,
      selectedSegmentId: null,
      message: null,
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
    newCourseAdded(){
      this.getCourses()
      this.message = 'New course added'
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
      this.message = null
      this.selectedSegmentId = null
      this.getCourses()
      this.showDetail();
    })
},
};
</script>
<template>
  <div>
    <button v-if="!unfurl" v-on:click="toggleUnfurl" class="btn btn-primary">Add New Course</button>
    <div v-if="unfurl" class='unfurlSection'>
      <i v-on:click="toggleUnfurl" class="fas fa-times closeButton"></i>
      <SearchStravaSegment v-on:selectedSegmentId="setSelectedSegmentId" />
      <SubmitCourse
        :segmentId="selectedSegmentId"
        :eventId="event.properties.id"
        :eventName="event.properties.name"
        v-on:killSegmentId="killSelectedSegmentId"
        v-on:newCourseAdded="newCourseAdded"
      />
    </div>
  </div>
</template>
<script>
import SearchStravaSegment from "./SearchStravaSegment.vue";
import SubmitCourse from "./SubmitCourse.vue";
export default {
  name: "AddNewCourse",
  components: {
    SearchStravaSegment,
    SubmitCourse,
  },
  computed: {},
  data() {
    return {
      selectedSegmentId: null,
      unfurl: false,
    };
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleUnfurl(){
      this.unfurl = !this.unfurl
    },
    killSelectedSegmentId() {
      this.selectedSegmentId = null;
    },
    setSelectedSegmentId(selectedSegmentId) {
      this.selectedSegmentId = selectedSegmentId;
    },
    newCourseAdded(){
      this.toggleUnfurl()
      this.$emit('newCourseAdded')
    }
  },
  mounted() {
    this.$root.$on("selectedParkRunEvent", () => {
        this.unfurl = false
    })
  }
};
</script>
<style scoped>
.closeButton {
    position: absolute;
    right: 0px;
    top: 0px;
    cursor: pointer
}
.unfurlSection {
    position: relative
}
</style>
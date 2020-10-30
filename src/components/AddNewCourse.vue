<template>
  <div>
    <button v-if="!unfurl" v-on:click="toggleUnfurl" class="btn btn-primary">Add New Course</button>
    <div v-if="unfurl">
      <SearchStravaSegment v-on:selectedSegmentId="setSelectedSegmentId" />
      <SubmitCourse
        :segmentId="selectedSegmentId"
        :eventId="event.id"
        :eventName="event.properties.EventLongName"
        v-on:killSegmentId="killSelectedSegmentId"
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
      this.unfurl = true
    },
    killSelectedSegmentId() {
      this.selectedSegmentId = null;
    },
    setSelectedSegmentId(selectedSegmentId) {
      this.selectedSegmentId = selectedSegmentId;
    },
  },
  mounted() {
    this.$root.$on("selectedParkRunEvent", () => {
        this.unfurl = false
    })
  }
};
</script>
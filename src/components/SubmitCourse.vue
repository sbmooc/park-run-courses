<template>
  <div>
    <form v-if="segmentId" @submit.prevent>
      <div class="form-group">
        <label for="exampleInputEmail1">Add course to {{eventName}}</label>
        <input
          type="text"
          class="form-control"
          placeholder="Course Name (e.g. Summer Course)"
          v-model="courseName"
        />
      </div>
      <button v-on:click="submitCourse" class="btn btn-primary">Submit</button>
    </form>
  <LoadingError :error="error" :loading="loading" :errorMessage="errorMessage" />
  </div>
</template>
<script>
import LoadingError from "./LoadingError.vue";
export default {
  name: "SubmitCourse",
  data() {
    return {
        show: false,
        courseName: null,
        loading: false,
        error: false,
        errorMessage: null
    };
  },
  components: {
      LoadingError
  },
  computed: {
      showComponent(){
          return this.show && this.segmentId
      }
  },
  props: {
    segmentId: {
      type: String,
    },
    eventName: {
        type: String,
    },
    eventId: {
        type: Number
    }
  },
  methods: {
      showToFalse() {
          this.$emit('killSegmentId')
      },
      submitCourse() {
          if (!this.courseName){
              this.error = true
              this.errorMessage = "You must add a course name"
              return
          }
          this.$store.dispatch('postCourse', this.segmentId, this.eventId, this.courseName)
      }
  },
  mounted() {},
};
</script>
<style scoped>
</style>
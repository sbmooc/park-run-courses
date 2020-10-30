<template>
  <div v-if="segmentId">
    <form @submit="submitCourse" @submit.prevent>
      <div class="form-group">
        <label for="exampleInputEmail1">Name of course</label>
        <input
          type="text"
          class="form-control"
          placeholder="Course Name (e.g. Summer Course)"
          v-model="courseName"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button @click="killSegmentId" class="btn btn-secondary">Submit</button>
    </form>
    <LoadingError v-bind:error="error" v-bind:loading="loading" />
    <Notification v-bind:message="message" />
  </div>
</template>
<script>
export default {
  name: "SubmitCourse",
  data() {
    return {
        courseName: null
    };
  },
  components: {},
  computed: {},
  props: {
    segmentId: {
      type: Number,
    },
  },
  methods: {
      killSegmentId() {
          this.segmentId = null 
      },
      submitCourse() {
          console.log('hello world')
      }
  },
  mounted() {},
};
</script>
<style scoped>
</style>
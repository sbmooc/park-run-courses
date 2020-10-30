<template>
<div>
  <div class="spinner-border" role="status" v-if="loading">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="alert alert-danger" role="alert" v-if="error">
    Uh oh - are you sure that is the correct segment ID?
  </div>
  </div>
</template>
<script>
export default {
  name: "LoadingError",
  data() {
    return {};
  },
  components: {},
  computed: {},
  props: {
    loading: {
      type: Boolean,
      required: true,
      default: false,
    },
    error: {
      type: Boolean,
      required: true,
    },
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
</style>
<template>
<div v-if="message" class="alert alert-success" role="alert">
  {{message}}
</div>
</template>
<script>
export default {
  name: "Notification",
  data() {
    return {
    };
  },
  components: {
  },
  computed: {},
  props: {
      message: {
          type: String
      }
  },
  methods: {
  },
  mounted() {},
};
</script>
<style scoped>
</style>
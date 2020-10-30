<template>
  <div>
    <h4 v-if="courses">{{ header }}</h4>
    <ul
      v-for="course in courses"
      :key="course.id"
      class="list-group list-group-flush"
    >
      <li @click="emitCourseGeoJson(course)" class="list-group-item">
        {{ course.properties.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CardList",
  components: {},
  computed: {},
  props: {
    courses: {
      type: Array,
    },
    header: {
      type: String,
    },
  },
  methods: {
    emitCourseGeoJson(course) {
      this.$root.$emit("selectedParkRunCourse", course);
    },
  },
  mounted() {},
};
</script>
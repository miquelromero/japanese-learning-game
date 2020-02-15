<template>
  <component :is="view" />
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  props: {
    slug: {
      type: String,
      mandatory: true,
      default: null,
    },
  },
  computed: {
    ...mapState('lesson', ['view']),
    ...mapGetters('lessons', ['getLessonBySlug']),
    lesson() {
      return this.getLessonBySlug(this.slug);
    },
  },
  methods: {
    ...mapActions('lesson', ['setLesson', 'clearLessonData']),
  },
  watch: {
    lesson: {
      immediate: true,
      handler() {
        this.setLesson(this.lesson);
      },
    },
  },
  beforeDestroy() {
    this.clearLessonData();
  },
};
</script>

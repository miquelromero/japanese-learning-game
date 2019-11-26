<template>
  <lesson-layout>
    <template #content>
      <component :is="screen.content" />
    </template>
    <template v-if="screen.footer !== undefined" #footer>
      <component :is="screen.footer" />
    </template>
  </lesson-layout>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import LessonLayout from '@/layouts/LessonLayout.vue';

export default {
  components: {
    LessonLayout,
  },
  props: {
    slug: {
      type: String,
      mandatory: true,
      default: null,
    },
  },
  computed: {
    ...mapState('lesson', ['screen']),
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
  destroyed() {
    this.clearLessonData();
  },
};
</script>

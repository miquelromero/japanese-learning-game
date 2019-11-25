<template>
  <ul class="lessons-list">
    <li v-for="lesson in lessons" :key="lesson.id">
      <router-link :to="{ name: 'lesson', params: { slug: lesson.slug } }">
        {{ lesson.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('lessons', ['lessons']),
  },
};
</script>

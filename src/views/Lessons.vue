<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <ul class="lessons-list">
      <li v-for="lesson in lessons" :key="lesson.id">
        <router-link :to="{ name: 'lesson', params: { slug: lesson.slug } }">
          {{ lesson.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      title: process.env.VUE_APP_NAME,
    };
  },
  computed: {
    ...mapGetters('lessons', ['lessons']),
  },
};
</script>

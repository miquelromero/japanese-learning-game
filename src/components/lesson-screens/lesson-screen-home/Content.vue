<template>
  <div>
    <h1 class="title">{{ lesson.title }}</h1>
    <component :is="lesson.info" />
  </div>
</template>

<script>
import AppNotebook from '@/components/ui/AppNotebook.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AppNotebook,
  },
  computed: {
    ...mapState('lesson', ['lesson']),
  },
};
</script>

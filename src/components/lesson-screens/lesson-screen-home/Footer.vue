<template>
  <div>
    <app-button @click="start">
      Play
    </app-button>
    <RouterLink
      class="button is-white is-large is-fullwidth"
      tag="button"
      :to="{ name: 'lessons' }"
      >Choose another lesson</RouterLink
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('lesson', ['start']),
  },
};
</script>

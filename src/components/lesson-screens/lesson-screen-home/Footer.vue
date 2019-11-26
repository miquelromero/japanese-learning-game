<template>
  <div>
    <button class="button is-primary is-large is-fullwidth" @click="start">
      Play
    </button>
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

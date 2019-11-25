<template>
  <div>
    <button class="button is-large is-fullwidth" @click="home">
      Read the lesson again
    </button>
    <button class="button is-primary is-large is-fullwidth" @click="start">
      Try again
    </button>
    <RouterLink
      class="button is-white is-medium is-fullwidth"
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
    ...mapActions('lesson', ['home', 'start']),
  },
};
</script>

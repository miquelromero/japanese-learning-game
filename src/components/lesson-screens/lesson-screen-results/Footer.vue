<template>
  <div>
    <button class="button is-primary is-large is-fullwidth" @click="start">
      Try again
    </button>
    <button class="button is-white is-large is-fullwidth" @click="home">
      Back
    </button>
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

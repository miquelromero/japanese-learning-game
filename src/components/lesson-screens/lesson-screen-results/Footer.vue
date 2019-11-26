<template>
  <div class="flex flex-col-reverse -my-2 md:flex-row md:-mx-2">
    <div class="py-2 md:w-1/2 md:px-2">
      <app-button alternative @click="home">
        Back to lesson
      </app-button>
    </div>
    <div class="py-2 md:w-1/2 md:px-2">
      <app-button @click="start">
        Try again
      </app-button>
    </div>
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

<template>
  <app-layout :layout-props="layoutProps">
    <div class="container">
      <div class="p-4">
        <div class="flex flex-col items-center">
          <h1 class="title">{{ title }}</h1>
          <img
            src="https://ih0.redbubble.net/image.229299501.3533/flat,800x800,070,f.u3.jpg"
            style="width: 200px; margin: 0 auto; display: flex;"
          />
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { mapActions } from 'vuex';
import LessonResultsFooter from './LessonResultsFooter.vue';

export default {
  computed: {
    title() {
      return `You have finished!`;
    },
    layoutProps() {
      return {
        footer: LessonResultsFooter,
        navbarIconLeft: {
          props: {
            icon: 'chevron-left-icon',
            class: 'cursor-pointer',
          },
          handlers: {
            click: this.home,
          },
        },
        navbarIconRight: {
          props: {
            icon: 'help-circle-outline-icon',
          },
        },
      };
    },
  },
  methods: {
    ...mapActions('lesson', ['home']),
  },
};
</script>

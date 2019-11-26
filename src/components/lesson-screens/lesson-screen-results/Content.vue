<template>
  <div class="flex flex-col items-cener">
    <h1 class="text-4xl">{{ title }}</h1>
    <img
      src="https://ih0.redbubble.net/image.229299501.3533/flat,800x800,070,f.u3.jpg"
      style="width: 200px; margin: 0 auto; display: flex;"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('lesson', ['score']),
    title() {
      return `You scored ${this.score}!`;
    },
  },
};
</script>

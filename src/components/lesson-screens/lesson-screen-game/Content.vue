<template>
  <div>
    Game is running...
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  mounted() {
    setTimeout(() => {
      this.finish({ score: 55425 });
    }, 2000);
  },
  methods: {
    ...mapActions('lesson', ['finish']),
  },
};
</script>

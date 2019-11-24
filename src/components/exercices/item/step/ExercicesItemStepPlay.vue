<template>
  <div>
    Game is running...
  </div>
</template>

<script>
import exercicesItemStepMixin from './exercices-item-step-mixin';
import events from './exercices-item-step-events';

export default {
  mixins: [exercicesItemStepMixin],
  mounted() {
    setTimeout(() => {
      this.finish();
    }, 2000);
  },
  methods: {
    finish() {
      this.emitEvent(events.FINISH, { score: 51541 });
    },
  },
};
</script>

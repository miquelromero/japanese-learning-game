<template>
  <div>
    <h2>You scored {{ score }}</h2>
    <button @click="restart">Try again</button>
    <button @click="setup">Change settings</button>
    <router-link tag="button" :to="{ name: 'exercices' }"
      >Pick another exercice</router-link
    >
  </div>
</template>

<script>
import exercicesItemStepMixin from './exercices-item-step-mixin';
import events from './exercices-item-step-events';

export default {
  mixins: [exercicesItemStepMixin],
  props: {
    score: {
      type: Number,
      mandatory: true,
      default: null,
    },
  },
  methods: {
    restart() {
      this.emitEvent(events.RESTART);
    },
    setup() {
      this.emitEvent(events.SETUP);
    },
  },
};
</script>

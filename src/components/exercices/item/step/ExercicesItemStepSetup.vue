<template>
  <div>
    <router-link tag="button" :to="{ name: 'exercices' }"
      >Pick another exercice</router-link
    >
    <h2>Information</h2>
    <component :is="exercice.info" />
    <h2>Options</h2>
    Here you can setup params
    <h2>Start</h2>
    <button @click="start">Start</button>
  </div>
</template>

<script>
import exercicesItemStepMixin from './exercices-item-step-mixin';
import events from './exercices-item-step-events';

export default {
  mixins: [exercicesItemStepMixin],
  methods: {
    start() {
      this.emitEvent(events.START);
    },
  },
};
</script>

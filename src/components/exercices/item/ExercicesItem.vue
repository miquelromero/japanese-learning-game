<template>
  <component
    :is="currentStep"
    :exercice="exercice"
    :score="score"
    @event="handleEvent"
  />
</template>

<script>
import ExercicesItemSetup from './step/ExercicesItemStepSetup.vue';
import ExercicesItemPlay from './step/ExercicesItemStepPlay.vue';
import ExercicesItemResults from './step/ExercicesItemStepResults.vue';
import events from './step/exercices-item-step-events';

const steps = {
  SETUP: ExercicesItemSetup,
  PLAY: ExercicesItemPlay,
  RESULTS: ExercicesItemResults,
};

export default {
  props: {
    exercice: {
      type: Object,
      mandatory: true,
      default: null,
    },
  },
  data() {
    return {
      currentStep: steps.SETUP,
      score: undefined,
    };
  },
  methods: {
    handleEvent({ event, params }) {
      switch (event) {
        case events.START:
        case events.RESTART:
          this.currentStep = steps.PLAY;
          this.score = undefined;
          break;
        case events.FINISH:
          this.currentStep = steps.RESULTS;
          this.score = params.score;
          break;
        case events.SETUP:
          this.currentStep = steps.SETUP;
          this.score = undefined;
          break;
      }
    },
  },
};
</script>

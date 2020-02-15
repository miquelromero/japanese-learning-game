<template>
  <component
    :is="component"
    v-bind="input.params"
    @input="$emit('input', $event)"
    :disabled="disabled"
  />
</template>

<script>
import inputTypes from '@/lessons/input-types';
import GameInputSet from './GameInputSet.vue';

export default {
  props: {
    input: {
      type: Object,
      mandatory: true,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      mandatory: false,
      default: false,
    },
  },
  computed: {
    component() {
      switch (this.input.type) {
        case inputTypes.SET:
          return GameInputSet;
        case inputTypes.INPUT:
        default:
          return undefined;
      }
    },
  },
};
</script>

<style></style>

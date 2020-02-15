<template>
  <div class="text-center">
    <app-button
      @click="$emit('input', value.value)"
      v-for="(value, index) in computedValues"
      :key="index"
      class="m-2"
      type="outlined"
      size="small"
      pill
      :disabled="disabled"
      >{{ value.text }}</app-button
    >
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: Function,
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
    computedValues() {
      return this.values();
    },
  },
};
</script>

<style></style>

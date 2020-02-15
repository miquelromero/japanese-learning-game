<template>
  <div
    @click="$emit('click', $event)"
    class="rounded-full border-4 p-2"
    :class="selected ? 'border-primary-600' : 'border-transparent'"
  >
    {{ modality.name }}
  </div>
</template>

<script>
export default {
  props: {
    modality: {
      type: Object,
      mandatory: true,
      default: undefined,
    },
    selected: {
      type: Boolean,
      mandatory: false,
      default: false,
    },
  },
};
</script>

<style></style>

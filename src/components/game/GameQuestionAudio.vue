<template>
  <span>audio: {{ text }}</span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      mandatory: true,
      default: undefined,
    },
  },
};
</script>

<template>
  <div>
    <pre>{{ exercice }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    exercice: {
      type: Object,
      mandatory: true,
      default: null,
    },
  },
};
</script>

<template>
  <button
    @click="$emit('click', $event)"
    class="py-2 px-4 rounded w-full"
    :class="[
      ...(primary ? ['bg-primary-500 hover:bg-primary-400 text-white'] : []),
      ...(alternative ? ['bg-white'] : []),
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    alternative: {
      type: Boolean,
      mandatory: false,
      default: false,
    },
  },
  computed: {
    primary() {
      return !this.alternative;
    },
  },
};
</script>

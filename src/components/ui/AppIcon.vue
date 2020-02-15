<template>
  <component
    @click="$emit('click', $event)"
    :is="outerComponent"
    v-bind="outerProps"
    class="text-white"
  >
    <component v-if="isRouterLink" :is="icon" :size="size" />
  </component>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      mandatory: true,
      default: undefined,
    },
    size: {
      type: Number,
      mandatory: false,
      default: undefined,
    },
    to: {
      type: Object,
      mandatory: false,
      default: undefined,
    },
  },
  computed: {
    isRouterLink() {
      return this.to !== undefined;
    },
    routerProps() {
      return {
        to: this.to,
      };
    },
    iconProps() {
      return {
        size: this.size,
      };
    },
    outerComponent() {
      return this.isRouterLink ? 'router-link' : this.icon;
    },
    outerProps() {
      return this.isRouterLink ? this.routerProps : this.iconProps;
    },
  },
};
</script>

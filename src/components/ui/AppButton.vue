<template>
  <component
    v-bind="routerLinkProps"
    :is="component"
    @click="$emit('click', $event)"
    class="py-2 px-4 rounded w-full"
    :class="[
      ...(primary ? ['bg-primary-500 hover:bg-primary-400 text-white'] : []),
      ...(alternative ? ['bg-white'] : []),
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    alternative: {
      type: Boolean,
      mandatory: false,
      default: false,
    },
    to: {
      type: Object,
      mandatory: false,
      default: undefined,
    },
  },
  computed: {
    primary() {
      return !this.alternative;
    },
    isRouterLink() {
      return this.to !== undefined;
    },
    component() {
      return this.isRouterLink ? 'router-link' : 'button';
    },
    routerLinkProps() {
      return this.isRouterLink
        ? {
            to: this.to,
            tag: 'button',
          }
        : {};
    },
  },
};
</script>

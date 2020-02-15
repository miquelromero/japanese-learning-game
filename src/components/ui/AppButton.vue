<template>
  <component
    v-bind="routerLinkProps"
    :is="component"
    @click="$emit('click', $event)"
    class="border focus:outline-none"
    :disabled="disabled"
    :class="[
      ...(fullWidth ? ['w-full'] : []),
      ...(pill ? ['rounded-full'] : ['rounded']),
      ...(size === 'small' ? ['py-2 px-4 text-xl'] : []),
      ...(size === 'medium' ? ['py-2 px-4 text-2xl'] : []),
      ...(type === 'primary'
        ? ['bg-primary-500 border-transparent text-white']
        : []),
      ...(type === 'alternative' ? ['bg-white'] : []),
      ...(disabled ? ['opacity-75'] : []),
      ...(type === 'outlined'
        ? [
            'bg-white active:bg-primary-500 text-primary-500 active:text-white border-primary-500 active:border-transparent',
          ]
        : []),
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      mandatory: false,
      default: 'primary',
      validator: value =>
        ['primary', 'alternative', 'outlined'].includes(value),
    },
    size: {
      type: String,
      mandatory: false,
      default: 'medium',
      validator: value => ['small', 'medium'].includes(value),
    },
    selected: {
      type: Boolean,
      mandatory: false,
      default: false,
    },
    pill: {
      type: Boolean,
      mandatory: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      mandatory: false,
      default: false,
    },
    fullWidth: {
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

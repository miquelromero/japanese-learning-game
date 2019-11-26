<template>
  <div class="flex flex-col flex-grow">
    <div class="p-4" v-if="hasHeader">
      <template v-if="hasHeaderSlot"><slot name="header"/></template>
      <h1 v-if="hasTitle" class="title">{{ title }}</h1>
    </div>
    <div class="flex-grow p-4" v-if="hasContentSlot">
      <div class="container">
        <slot name="content" />
      </div>
    </div>
    <div class="p-4 shadow-lg" v-if="hasFooterSlot">
      <div class="container">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      mandatory: false,
      default: null,
    },
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots['header'];
    },
    hasContentSlot() {
      return !!this.$slots['content'];
    },
    hasFooterSlot() {
      return !!this.$slots['footer'];
    },
    hasTitle() {
      return this.title !== null;
    },
    hasHeader() {
      return this.hasHeaderSlot || this.hasTitle;
    },
  },
};
</script>

<style scoped></style>

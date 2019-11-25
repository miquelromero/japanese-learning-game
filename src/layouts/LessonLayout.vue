<template>
  <div class="app-layout">
    <div class="app-layout__header" v-if="hasHeader">
      <template v-if="hasHeaderSlot"><slot name="header"/></template>
      <h1 v-if="hasTitle" class="title">{{ title }}</h1>
    </div>
    <div class="app-layout__content" v-if="hasContentSlot">
      <slot name="content" />
    </div>
    <div class="app-layout__footer" v-if="hasFooterSlot">
      <slot name="footer" />
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

<style lang="scss" scoped>
.app-layout {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &__header {
    padding: 20px;
    text-align: center;
  }
  &__content {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
  }
  &__footer {
    display: flex;
    flex-direction: column;
    padding: 20px;
    > *:not(:first-child) {
      margin-top: 20px;
    }
  }
}
</style>

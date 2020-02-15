<template>
  <component :is="layout" v-bind="layoutProps">
    <router-view />
  </component>
</template>

<script>
import { mapState } from 'vuex';

export default {
  metaInfo: {
    title: `${process.env.VUE_APP_NAME} - ${process.env.VUE_APP_DESCRIPTION}`,
  },
  computed: {
    ...mapState('layout', ['layout', 'layoutProps']),
  },
};
</script>

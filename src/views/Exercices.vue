<template>
  <div>
    <h1>All the exercices</h1>
    <ExercicesList :exercices="exercices" />
  </div>
</template>

<script>
import ExercicesList from '@/components/ExercicesList.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ExercicesList,
  },
  computed: {
    ...mapGetters(['exercices']),
  },
};
</script>

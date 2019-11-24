<template>
  <ul>
    <li v-for="exercice in exercices" :key="exercice.id">
      <router-link
        :to="{ name: 'exercice', params: { exerciceSlug: exercice.slug } }"
      >
        {{ exercice.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    exercices: {
      type: Array,
      mandatory: true,
      default: () => [],
    },
  },
};
</script>

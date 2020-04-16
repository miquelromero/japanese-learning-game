<template>
  <table>
    <tr v-for="(values, index) in collection" :key="index">
      <th v-for="value in values" :key="value">
        {{ value }}
      </th>
    </tr>
  </table>
</template>

<script>
import collection from './collection';
export default {
  data() {
    return {
      collection,
    };
  },
};
</script>

<template>
  <div class="flex flex-row -mx-2">
    <div class="w-1/2 px-2">
      <app-button alternative :to="{ name: 'lessons' }">
        Back
      </app-button>
    </div>
    <div class="w-1/2 px-2">
      <app-button @click="start">
        Play
      </app-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('lesson', ['start']),
  },
};
</script>

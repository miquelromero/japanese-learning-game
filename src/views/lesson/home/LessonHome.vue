<template>
  <app-layout :layout-props="layoutProps">
    <div class="container">
      <div class="p-4">
        <h1 class="title">{{ lesson.title }}</h1>
        <div class="flex overflow-x-auto py-4">
          <app-button-modality
            v-for="(availableModality, index) in lesson.availableModalities"
            :key="index"
            :modality="availableModality"
            @click="setModality(availableModality)"
            :selected="isSelected(availableModality)"
          />
        </div>

        <component :is="lesson.info" />
      </div>
    </div>
  </app-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import LessonHomeFooter from './LessonHomeFooter';
import AppButtonModality from '@/components/ui/AppButtonModality';

export default {
  components: {
    AppButtonModality,
  },
  computed: {
    ...mapState('lesson', ['lesson', 'modality']),
    layoutProps() {
      return {
        footer: LessonHomeFooter,
        navbarIconLeft: {
          props: {
            icon: 'chevron-left-icon',
            to: { name: 'lessons' },
          },
        },
        navbarIconRight: {
          props: {
            icon: 'help-circle-outline-icon',
          },
        },
      };
    },
  },
  methods: {
    ...mapMutations('lesson', ['setModality']),
    isSelected(modality) {
      return modality === this.modality;
    },
  },
};
</script>

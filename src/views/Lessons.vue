<template>
  <app-layout :layout-props="layoutProps">
    <div class="container">
      <div class="sm:p-4">
        <ul class="shadow">
          <router-link
            class="flex items-center cursor-pointer bg-white hover:bg-gray-100 p-4 h-16 border-b last:border-b-0"
            v-for="lesson in lessons"
            :key="lesson.id"
            tag="li"
            :to="{ name: 'lesson', params: { slug: lesson.slug } }"
          >
            <div class="flex-grow">
              {{ lesson.title }}
            </div>
            <div class="flex -mx-1">
              <div
                v-for="(modality, index) in lesson.availableModalities"
                :key="index"
                class="rounded-full bg-primary-500 h-6 w-6 mx-1"
              ></div>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      title: process.env.VUE_APP_NAME,
    };
  },
  computed: {
    ...mapGetters('lessons', ['lessons']),
    layoutProps() {
      return {
        showNavbar: true,
        navbarIconRight: {
          props: {
            icon: 'help-circle-outline-icon',
          },
        },
      };
    },
  },
};
</script>

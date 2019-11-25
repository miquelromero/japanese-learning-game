import Vue from 'vue';
import VueRouter from 'vue-router';
import Lessons from '../views/Lessons.vue';
import Lesson from '../views/Lesson.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'lessons',
    component: Lessons,
  },
  {
    path: '/lesson/:slug',
    name: 'lesson',
    component: Lesson,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

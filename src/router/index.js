import Vue from 'vue';
import VueRouter from 'vue-router';
import Exercices from '../views/Exercices.vue';
import Exercice from '../views/Exercice.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'exercices',
    component: Exercices,
  },
  {
    path: '/exercice/:exerciceSlug',
    name: 'exercice',
    component: Exercice,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

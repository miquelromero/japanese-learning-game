import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/css/index.css';
import AppButton from '@/components/ui/AppButton.vue';
import VueMeta from 'vue-meta';

Vue.use(VueMeta);

Vue.component('app-button', AppButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

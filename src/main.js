import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/css/index.css';
import AppIcon from '@/components/ui/AppIcon.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppLayout from '@/components/ui/AppLayout';
import VueMeta from 'vue-meta';
import VueTypedJs from 'vue-typed-js';
import '@/libraries/vue-material-design-icons';

Vue.use(VueTypedJs);

Vue.use(VueMeta);

Vue.component('app-button', AppButton);
Vue.component('app-icon', AppIcon);
Vue.component('app-layout', AppLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

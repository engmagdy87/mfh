import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import VueFullPage from 'vue-fullpage.js';

import App from './App.vue';

import router from './router';

Vue.use(VueRouter);
Vue.use(Buefy);
Vue.use(VueFullPage);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');

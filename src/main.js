import Vue from 'vue';
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

const App = () => import('./App.vue');

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

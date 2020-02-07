import Vue from 'vue';
import smoothscroll from 'smoothscroll-polyfill/dist/smoothscroll';

smoothscroll.polyfill();

const App = () => import('./App.vue');

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

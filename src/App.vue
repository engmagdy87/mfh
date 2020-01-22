<template>
  <div class="app-wrapper">
    <SplashScreen v-if="isSpinnerVisible" />
    <router-view v-else />
  </div>
</template>

<script>
import SplashScreen from './components/SplashScreen';

export default {
  name: 'app',
  components: { SplashScreen },
  data() {
    return {
      isSpinnerVisible: true,
      spinnerTimer: 4000,
      spinner: {
        timer: 400,
        value: 1
      }
    };
  },
  methods: {
    percentageCounter() {
      return setInterval(() => {
        this.spinner.value += 1;
      }, this.spinner.timer);
    }
  },
  mounted() {
    this.percentageCounter();
    setTimeout(() => {
      this.isSpinnerVisible = false;
      clearInterval(this.percentageCounter);
    }, this.spinnerTimer);
  }
};
</script>

<style lang="scss">
@import './assets/styles/app.scss';
@import url('https://unpkg.com/fullpage.js/dist/fullpage.min.css');
</style>

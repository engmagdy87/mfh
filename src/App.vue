<template>
  <div class="app-wrapper">
    <transition name="fade" mode="out-in">
      <SplashScreen key="1" v-if="isSpinnerVisible" />
      <Landing key="2" v-else />
    </transition>
  </div>
</template>

<script>
const Landing = () => import('./containers/Landing');
const SplashScreen = () => import('./components/SplashScreen');

export default {
  name: 'app',
  components: { Landing, SplashScreen },
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
@import './assets/styles/grid-layout.scss';
</style>

<template>
  <div class="splash-screen-wrapper">
    <Slogan />
    <div class="splash-screen-wrapper__footer">
      <img src="../assets/images/logo-light.png" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../shared/Footer';
import Slogan from '../assets/images/slogan-open.svg';

export default {
  components: {
    Footer,
    Slogan
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/splash-screen.scss';
</style>

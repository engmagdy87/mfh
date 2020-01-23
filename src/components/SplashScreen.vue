<template>
  <div class="splash-screen-wrapper">
    <Slogan />
    <div class="splash-screen-wrapper__footer">
      <MFHLogo class="mfh-logo" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../shared/Footer';
import Slogan from '../assets/images/slogan-open.svg';
import MFHLogo from '../assets/images/logo-dark.svg';

export default {
  components: {
    Footer,
    Slogan,
    MFHLogo
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/splash-screen.scss';
</style>

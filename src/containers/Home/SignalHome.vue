<template>
  <div class="signal-home-wrapper">
    <Signal />
    <SlideDownIcon />
    <Footer :innerPage="true" />
  </div>
</template>

<script>
import Footer from '../../shared/Footer';
import SlideDownIcon from '../../shared/SlideDownIcon';
import Signal from '../../assets/images/svg/360';

export default {
  components: { Footer, Signal, SlideDownIcon }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/containers/signal-home.scss';
</style>

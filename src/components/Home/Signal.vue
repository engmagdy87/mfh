<template>
  <div class="signal-home-wrapper">
    <Signal />
    <SlideDownIcon />
    <Footer :innerPage="true" />
  </div>
</template>

<script>
const Footer = () => import('../../shared/Footer');
const SlideDownIcon = () => import('../../shared/SlideDownIcon');
const Signal = () => import('../../assets/images/svg/360');

export default {
  components: { Footer, Signal, SlideDownIcon }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/home/home-signal.scss';
</style>

<template>
  <div class="signal-home-wrapper">
    <div class="signal-home-wrapper__canvas">
      <Signal />
      <SlideDownIcon />
      <Footer :innerPage="true" />
    </div>
  </div>
</template>

<script>
import Footer from '../../shared/Footer';
import SlideDownIcon from '../../shared/SlideDownIcon';
import Signal from '../../assets/images/360.svg';

export default {
  components: { Footer, Signal, SlideDownIcon },
  mounted() {
    document
      .getElementsByClassName('explore-more')[0]
      .addEventListener('click', () => {
        location.hash = '#page2';
      });
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/containers/signal-home.scss';
</style>

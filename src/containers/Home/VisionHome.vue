<template>
  <div class="strategic-home-wrapper">
    <div class="strategic-home-wrapper__canvas">
      <Shape class="strategic-home-wrapper__shape" />
      <div class="columns is-desktop strategic-home-wrapper__titles">
        <h2>VISION</h2>
        <h1>Statement</h1>
      </div>
      <div class="columns is-desktop strategic-home-wrapper__content">
        <p class="column">
          Our vision is to be the most admired investment partner in the MENA
          region.
        </p>
        <p class="column">
          Our vision is to be the most admired investment partner in the MENA
          region.
        </p>
        <p class="column">
          Our vision is to be the most admired investment partner in the MENA
          region.
        </p>
      </div>
      <Footer :innerPage="true" />
    </div>
  </div>
</template>

<script>
import Footer from '../../shared/Footer';
import Shape from '../../assets/images/shape.svg';

export default {
  components: { Footer, Shape }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/containers/strategic-home.scss';
</style>

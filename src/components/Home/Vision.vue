<template>
  <div class="strategic-home-wrapper">
    <Shape class="strategic-home-wrapper__shape" />
    <div class="strategic-home-wrapper__content">
      <div class="strategic-home-wrapper__titles">
        <h2>VISION</h2>
        <h1>Statement</h1>
      </div>
      <div class="grid">
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
    </div>
    <Footer :innerPage="true" />
  </div>
</template>

<script>
const Footer = () => import('../../shared/Footer');
const Shape = () => import('../../assets/images/shape.svg');

export default {
  components: { Footer, Shape }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/home/home.scss';
</style>

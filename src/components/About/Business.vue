<template>
  <div class="business-about-wrapper">
    <h1>Business</h1>
    <Footer :innerPage="true" />
  </div>
</template>

<script>
const Footer = () => import('../../shared/Footer');

export default {
  components: { Footer }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/about/business.scss';
</style>

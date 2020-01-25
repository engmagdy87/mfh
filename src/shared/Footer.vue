<template>
  <div :class="[innerPage ? 'footer-wrapper__inner' : 'footer-wrapper']">
    <span
      >Part of
      <a href="http://www.medafinvestment.com/" target="__blank"
        ><strong>Medaf Investments</strong></a
      ></span
    >
  </div>
</template>

<script>
export default {
  props: ['innerPage']
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/shared/footer.scss';
</style>

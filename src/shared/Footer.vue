<template>
  <div :class="[innerPage ? 'footer-wrapper__inner' : 'footer-wrapper']">
    <span>Part of <strong>Medaf Investments</strong></span>
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

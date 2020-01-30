<template>
  <div>
    <div
      v-if="!isDarkTheme"
      :class="[innerPage ? 'footer-wrapper__inner' : 'footer-wrapper']"
    >
      <span class="footer-wrapper__part"
        >Part of
        <a href="http://www.medafinvestment.com/" target="__blank"
          ><strong class="footer-wrapper__url">Medaf Investments</strong></a
        ></span
      >
    </div>
    <div
      :class="[
        'dark-theme',
        innerPage ? 'footer-wrapper__inner' : 'footer-wrapper'
      ]"
      v-else
    >
      <span class="dark-theme__part"
        >Part of
        <a href="http://www.medafinvestment.com/" target="__blank"
          ><strong class="dark-theme__url">Medaf Investments</strong></a
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['innerPage', 'isDarkTheme']
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/shared/footer.scss';
</style>

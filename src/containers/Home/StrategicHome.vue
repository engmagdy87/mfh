<template>
  <div class="strategic-home-wrapper">
    <Shape class="strategic-home-wrapper__shape" />
    <div class="columns is-desktop strategic-home-wrapper__titles">
      <h2>STRATEGIC</h2>
      <h1>Approach</h1>
    </div>
    <div class="columns is-desktop strategic-home-wrapper__content">
      <p class="column">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p class="column">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p class="column">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
    <Footer :innerPage="true" />
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

<template>
  <div class="landing-wrapper">
    <div id="home" class="landing-wrapper__section">
      <Header :isLogoAnimated="true" activeItem="home" />
      <Signal />
    </div>
    <div
      id="vision"
      class="landing-wrapper__section landing-wrapper__section__dark"
    >
      <Header :isLightLogo="true" activeItem="home" />
      <Vision />
    </div>
    <div
      id="strategy"
      class="landing-wrapper__section landing-wrapper__section__dark"
    >
      <Header :isLightLogo="true" activeItem="home" />
      <Strategic />
    </div>
    <div
      id="about-people"
      class="landing-wrapper__section landing-wrapper__section__darkest"
    >
      <Header :isLightLogo="true" activeItem="people" />
      <AboutPeople />
    </div>
    <div
      id="about-business"
      class="landing-wrapper__section landing-wrapper__section__darkest"
    >
      <Header :isLightLogo="true" activeItem="business" />
      <AboutBusiness />
    </div>
  </div>
</template>

<script>
const Header = () => import('../shared/Header');
const Signal = () => import('../components/Home/Signal');
const Vision = () => import('../components/Home/Vision');
const Strategic = () => import('../components/Home/Strategic');
const AboutPeople = () => import('../components/About/People');
const AboutBusiness = () => import('../components/About/Business');

export default {
  components: {
    Signal,
    Vision,
    Strategic,
    AboutPeople,
    AboutBusiness,
    Header
  }
};
</script>

<style lang="scss">
@import '../assets/styles/containers/landing.scss';
</style>

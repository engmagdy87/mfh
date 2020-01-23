<template>
  <div class="landing-wrapper">
    <div id="home" class="landing-wrapper__section">
      <Header :isLogoAnimated="true" activeItem="home" />
      <SignalHome />
    </div>
    <div
      id="vision"
      class="landing-wrapper__section landing-wrapper__section__dark"
    >
      <Header :isLightLogo="true" activeItem="home" />
      <VisionHome />
    </div>
    <div
      id="strategy"
      class="landing-wrapper__section landing-wrapper__section__dark"
    >
      <Header :isLightLogo="true" activeItem="home" />
      <StrategicHome />
    </div>
  </div>
</template>

<script>
import Header from '../shared/Header';
import SignalHome from '../containers/Home/SignalHome';
import VisionHome from '../containers/Home/VisionHome';
import StrategicHome from '../containers/Home/StrategicHome';

export default {
  components: {
    SignalHome,
    VisionHome,
    StrategicHome,
    Header
  }
};
</script>

<style lang="scss">
@import '../assets/styles/containers/landing.scss';
</style>

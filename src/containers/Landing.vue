<template>
  <div>
    <full-page
      id="fullpage"
      :options="options"
      ref="fullpage"
      class="landing-wrapper__sections"
    >
      <div class="section">
        <Header :isLogoAnimated="true" />
        <SignalHome />
      </div>
      <div class="section section__dark">
        <Header :isLightLogo="true" />
        <VisionHome />
      </div>
      <div class="section section__dark">
        <Header :isLightLogo="true" />
        <StrategicHome />
      </div>
      <div class="section section__dark">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Header from '../shared/Header';
import SignalHome from '../containers/Home/SignalHome';
import VisionHome from '../containers/Home/VisionHome';
import StrategicHome from '../containers/Home/StrategicHome';

export default {
  data: function() {
    return {
      options: {
        afterLoad: this.afterLoad,
        navigation: true,
        anchors: ['page1', 'page2', 'page3']
      }
    };
  },
  components: { SignalHome, VisionHome, StrategicHome, Header }
};
</script>

<style lang="scss">
@import '../assets/styles/containers/landing.scss';
</style>

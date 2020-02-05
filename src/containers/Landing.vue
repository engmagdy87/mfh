<template>
  <div class="landing-wrapper">
    <div id="home" class="landing-wrapper__section">
      <Header
        :isLogoAnimated="true"
        activeItem="home"
        :closeOurTeam="closeOurTeam"
      />
      <Signal />
    </div>
    <div
      id="vision"
      class="landing-wrapper__section landing-wrapper__section__dark"
    >
      <Header
        :isLightLogo="true"
        activeItem="home"
        :closeOurTeam="closeOurTeam"
      />
      <Vision />
    </div>
    <div
      id="strategy"
      class="landing-wrapper__section landing-wrapper__section__dark"
    >
      <Header
        :isLightLogo="true"
        activeItem="home"
        :closeOurTeam="closeOurTeam"
      />
      <Strategic />
    </div>
    <div
      id="about-people"
      class="landing-wrapper__section landing-wrapper__section__darkest"
    >
      <Header
        :isLightLogo="true"
        activeItem="people"
        :closeOurTeam="closeOurTeam"
      />
      <AboutPeople :isMobileView="isMobileView" ref="peopleComponent" />
    </div>
    <div
      id="about-business"
      v-if="isWebpSupportedFlag !== null"
      :class="[
        'landing-wrapper__section landing-wrapper__section__light-section',
        getProperBackground('business')
      ]"
    >
      <LightHeader
        activeItem="business"
        :isMobileView="isMobileView"
        :closeOurTeam="closeOurTeam"
      />
      <AboutBusiness />
    </div>
    <div
      id="services"
      v-if="isWebpSupportedFlag !== null"
      :class="[
        'landing-wrapper__section landing-wrapper__section__light-section',
        getProperBackground('services')
      ]"
    >
      <LightHeader
        activeItem="services"
        :isMobileView="isMobileView"
        :closeOurTeam="closeOurTeam"
      />
      <Services />
    </div>
    <div
      id="contact"
      v-if="isWebpSupportedFlag !== null"
      :class="[
        'landing-wrapper__section landing-wrapper__section__light-section',
        getProperBackground('contact')
      ]"
    >
      <LightHeader
        activeItem="contact"
        :isMobileView="isMobileView"
        :closeOurTeam="closeOurTeam"
      />
      <Contact />
    </div>
  </div>
</template>

<script>
const Header = () => import('../shared/Header');
const LightHeader = () => import('../shared/LightHeader');
const Signal = () => import('../components/Home/Signal');
const Vision = () => import('../components/Home/Vision');
const Strategic = () => import('../components/Home/Strategic');
const AboutPeople = () => import('../components/About/People');
const AboutBusiness = () => import('../components/About/Business');
const Services = () => import('../components/Services');
const Contact = () => import('../components/Contact');

import isWebpSupported from '../helper/WebpDetectionHelper';

export default {
  data() {
    return {
      isWebpSupportedFlag: null,
      isMobileView: false
    };
  },
  components: {
    Signal,
    Vision,
    Strategic,
    AboutPeople,
    AboutBusiness,
    Header,
    LightHeader,
    Services,
    Contact
  },
  methods: {
    getProperBackground(section) {
      return `landing-wrapper__section__${section}--${
        this.isMobileView ? 'mob' : 'desk'
      }-${this.isWebpSupportedFlag ? 'webp' : 'jpg'}`;
    },
    closeOurTeam() {
      this.$refs.peopleComponent.expandPeopleWidth();
    }
  },
  mounted() {
    const phone = window.matchMedia('(max-width:575px)');
    const tablet = window.matchMedia(
      '(min-width:768px) and (max-width: 991px)'
    );
    if (phone.matches || tablet.matches) {
      this.isMobileView = true;
    }

    (async () => {
      this.isWebpSupportedFlag = await isWebpSupported();
    })();
  }
};
</script>

<style lang="scss">
@import '../assets/styles/containers/landing.scss';
</style>

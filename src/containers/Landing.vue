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
      class="landing-wrapper__section landing-wrapper__section__light-section"
      v-if="isWebpSupportedFlag !== null"
      :style="businessWrapperStyle"
    >
      <LightHeader activeItem="business" :isMobileView="isMobileView" />
      <AboutBusiness />
    </div>
    <div
      id="services"
      class="landing-wrapper__section landing-wrapper__section__light-section"
      v-if="isWebpSupportedFlag !== null"
      :style="servicesWrapperStyle"
    >
      <LightHeader activeItem="services" :isMobileView="isMobileView" />
      <Services />
    </div>
    <div
      id="contact"
      class="landing-wrapper__section landing-wrapper__section__light-section"
      v-if="isWebpSupportedFlag !== null"
      :style="contactWrapperStyle"
    >
      <LightHeader activeItem="contact" :isMobileView="isMobileView" />
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

import nileCityJpg from '../assets/images/nile-city.jpg';
import nileCityMobJpg from '../assets/images/nile-city-mob.jpg';
import nileCityWebp from '../assets/images/nile-city.webp';
import nileCityMobWebp from '../assets/images/nile-city-mob.webp';

import oliverJpg from '../assets/images/olivier-web.jpg';
import oliverMobJpg from '../assets/images/olivier-mob.jpg';
import oliverWebp from '../assets/images/olivier-web.webp';
import oliverMobWebp from '../assets/images/olivier-mob.webp';

import contactJpg from '../assets/images/contact.jpg';
import contactMobJpg from '../assets/images/contact-mob.jpg';
import contactWebp from '../assets/images/contact.webp';
import contactMobWebp from '../assets/images/contact-mob.webp';

export default {
  data() {
    return {
      isWebpSupportedFlag: null,
      isMobileView: false,
      businessWrapperStyle: '',
      servicesWrapperStyle: '',
      contactWrapperStyle: '',
      nileCityJpg,
      nileCityMobJpg,
      nileCityWebp,
      nileCityMobWebp,
      contactJpg,
      contactMobJpg,
      contactWebp,
      contactMobWebp
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
    getBusinessProperBackground() {
      if (this.isMobileView) {
        if (this.isWebpSupportedFlag) {
          this.businessWrapperStyle = `background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${nileCityMobWebp});`;
        } else {
          this.businessWrapperStyle = `background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${nileCityMobJpg});`;
        }
      } else {
        if (this.isWebpSupportedFlag) {
          this.businessWrapperStyle = `background-image: url(${nileCityWebp});background-color:#c4dded`;
        } else {
          this.businessWrapperStyle = `background-image: url(${nileCityJpg});`;
        }
      }
    },
    getServicesProperBackground() {
      if (this.isMobileView) {
        if (this.isWebpSupportedFlag) {
          this.servicesWrapperStyle = `background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${oliverMobWebp});`;
        } else {
          this.servicesWrapperStyle = `background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${oliverMobJpg});`;
        }
      } else {
        if (this.isWebpSupportedFlag) {
          this.servicesWrapperStyle = `background-image: url(${oliverWebp});background-color:#c4dded`;
        } else {
          this.servicesWrapperStyle = `background-image: url(${oliverJpg});`;
        }
      }
    },
    getContactProperBackground() {
      if (this.isMobileView) {
        if (this.isWebpSupportedFlag) {
          this.contactWrapperStyle = `background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactMobWebp});`;
        } else {
          this.contactWrapperStyle = `background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactMobJpg});`;
        }
      } else {
        if (this.isWebpSupportedFlag) {
          this.contactWrapperStyle = `background-image: url(${contactWebp});background-color:#c4dded`;
        } else {
          this.contactWrapperStyle = `background-image: url(${contactJpg});`;
        }
      }
    }
  },
  mounted() {
    const phone = window.matchMedia('(max-width:575px)');
    const tablet = window.matchMedia(
      '(min-width:768px) and (max-width: 991px)'
    );
    const desktop = window.matchMedia(
      '(min-width:992px) and (max-width: 1199px)'
    );
    if (phone.matches || tablet.matches || desktop.matches) {
      this.isMobileView = true;
    }

    (async () => {
      this.isWebpSupportedFlag = await isWebpSupported();
      this.getBusinessProperBackground();
      this.getServicesProperBackground();
      this.getContactProperBackground();
    })();
  }
};
</script>

<style lang="scss">
@import '../assets/styles/containers/landing.scss';
</style>

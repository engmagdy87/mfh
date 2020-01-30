<template>
  <div class="services-about-wrapper">
    <div
      class="services-about-wrapper__column services-about-wrapper__column--1"
    >
      <h1>Services</h1>
    </div>
    <div
      class="services-about-wrapper__column services-about-wrapper__column--2"
    >
      <p>
        MFH is actively providing a multitude of its services to government
        entities, banks, corporates and family offices.
      </p>
      <p>
        Clients benefit from capitalising on the wide range of our services and
        our disciplined, responsible approach in investing strategies.
      </p>
      <p>
        We work with clients from evaluation of opportunities, through
        processing using bespoke tailored solutions and up to attainment of a
        favourable exit scenario. MFH as agroup manages every aspect of the
        investment process.
      </p>
    </div>
    <div
      class="services-about-wrapper__column services-about-wrapper__column--3"
    >
      <h1>Services</h1>
      <div class="services-about-wrapper__services-grid">
        <div v-for="(service, index) in servicesData" :key="index">
          <p>{{ service.number }}</p>
          <p>{{ service.firstPart }}</p>
          <p>{{ service.secondPart }}</p>
        </div>
      </div>
    </div>
    <Footer :innerPage="true" />
  </div>
</template>

<script>
const Footer = () => import('../shared/Footer');
import servicesData from '../assets/json/services.json';

export default {
  data() {
    return {
      servicesData
    };
  },
  components: { Footer }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/services.scss';
</style>

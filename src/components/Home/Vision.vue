<template>
  <div
    v-if="isWebpSupportedFlag !== null"
    :class="['strategic-home-wrapper', getProperBackground()]"
  >
    <Shape class="strategic-home-wrapper__shape" />
    <div class="strategic-home-wrapper__content">
      <div class="strategic-home-wrapper__titles">
        <h2>VISION</h2>
        <h1>Statement</h1>
      </div>
      <div class="vision-content">
        Our vision is to be the most admired investment partner in the MENA
        region.
      </div>
    </div>
    <Footer :innerPage="true" />
  </div>
</template>

<script>
const Footer = () => import('../../shared/Footer');
const Shape = () => import('../../assets/images/shape.svg');
import isWebpSupported from '../../helper/WebpDetectionHelper';

export default {
  data() {
    return {
      isWebpSupportedFlag: null,
      isMobileView: false
    };
  },
  components: { Footer, Shape },
  methods: {
    getProperBackground() {
      return `strategic-home-wrapper__background--${
        this.isMobileView ? 'mob' : 'desk'
      }-${this.isWebpSupportedFlag ? 'webp' : 'jpg'}`;
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
    })();
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/home/home.scss';
</style>

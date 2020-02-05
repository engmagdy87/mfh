<template>
  <div
    v-if="isWebpSupportedFlag !== null"
    :class="['vision-home-wrapper', getProperBackground()]"
  >
    <div class="vision-home-wrapper__content">
      <div class="vision-home-wrapper__titles">
        <h1>
          Our vision is to be the most admired investment partner in the MENA
          region.
        </h1>
      </div>
    </div>
    <Footer :innerPage="true" />
  </div>
</template>

<script>
const Footer = () => import('../../shared/Footer');
import isWebpSupported from '../../helper/WebpDetectionHelper';

export default {
  data() {
    return {
      isWebpSupportedFlag: null,
      isMobileView: false
    };
  },
  components: { Footer },
  methods: {
    getProperBackground() {
      return `vision-home-wrapper__background--${
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
@import '../../assets/styles/components/home/vision.scss';
</style>

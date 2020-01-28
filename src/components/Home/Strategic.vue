<template>
  <div
    class="strategic-home-wrapper"
    v-if="isWebpSupportedFlag !== null"
    :style="wrapperStyle"
  >
    <Shape class="strategic-home-wrapper__shape" />
    <div class="strategic-home-wrapper__content">
      <div class="strategic-home-wrapper__titles">
        <h2>STRATEGIC</h2>
        <h1>Approach</h1>
      </div>
      <div class="grid">
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
    </div>
    <Footer :innerPage="true" />
  </div>
</template>

<script>
const Footer = () => import('../../shared/Footer');
const Shape = () => import('../../assets/images/shape.svg');
import isWebpSupported from '../../helper/WebpDetectionHelper';
import spotPicWebp from '../../assets/images/spot-pic.webp';
import spotPicJpg from '../../assets/images/spot-pic.jpg';
import spotPicMobWebp from '../../assets/images/spot-pic-mob.webp';
import spotPicMobJpg from '../../assets/images/spot-pic-mob.jpg';

export default {
  data() {
    return {
      isWebpSupportedFlag: null,
      isMobileView: false,
      spotPicWebp,
      spotPicJpg,
      spotPicMobWebp,
      spotPicMobJpg,
      wrapperStyle: ''
    };
  },
  methods: {
    getProperBackground() {
      if (this.isMobileView) {
        if (this.isWebpSupportedFlag) {
          this.wrapperStyle = `background-image: linear-gradient(to bottom left,rgba(255, 255, 255, 0.12),rgba(0, 0,0, 0.75)),url(${spotPicMobWebp});`;
        } else {
          this.wrapperStyle = `background-image: linear-gradient(to bottom left,rgba(255, 255, 255, 0.12),rgba(0, 0, 0, 0.75)),url(${spotPicMobJpg});`;
        }
      } else {
        if (this.isWebpSupportedFlag) {
          this.wrapperStyle = `background-image: url(${spotPicWebp});`;
        } else {
          this.wrapperStyle = `background-image: url(${spotPicJpg});`;
        }
      }
    }
  },
  components: { Footer, Shape },
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
      this.getProperBackground();
    })();
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/home/home.scss';
</style>

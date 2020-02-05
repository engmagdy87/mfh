<template>
  <div
    v-if="isWebpSupportedFlag !== null"
    :class="['strategic-home-wrapper', getProperBackground()]"
  >
    <Shape class="strategic-home-wrapper__shape" />
    <div class="strategic-home-wrapper__content">
      <div class="strategic-home-wrapper__titles">
        <h2>STRATEGIC</h2>
        <h1>Approach</h1>
      </div>
      <div class="strategic-home-wrapper__paragraph">
        <p>
          MFH is one of Egypt’s singular financial holding groups offering a
          full range of non-banking financial services, bringing
          <strong
            >100+ years of in-depth experience in the region’s business &
            finance landscape.</strong
          >
        </p>
        <p>
          Our vision is grounded on a robust foundation of uncompromising moral
          awareness, an exceptional social contract with our communities, and
          internal metrics that ensure ethical choices in the investment
          management process.
        </p>
        <p>
          MFH adopts a strategic approach that is underpinned by our assurance
          of transparent practice, and dedication to providing a specialist and
          unique service to clients.
        </p>
        <p>
          Through
          <strong
            >the group’s network of authorized and regulated companies in the
            UK, China and Switzerland,</strong
          >
          MFH is strategically placed to enable investors to expand their return
          horizons and participate in the
          <strong
            >high growth potential of the Mediterranean, Middle East and Africa
            markets.</strong
          >
        </p>
        <p>
          MFH, through synergistic M&As, and international strategic alliances,
          is trusted by clients and partners, ranging from international
          investment banks to smaller investment funds, to execute their
          commercial ambitions in a fair, transparent and cost-effective way.
        </p>
        <hr style="width: 30%;margin-left: 0;" />
        <p style="text-align: left;">
          To learn more about collaborative opportunities, contact
          <a
            href="mailto:info@medafinvestment.com"
            style="text-decoration: underline;color: inherit;"
            >Click here</a
          >.
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

export default {
  data() {
    return {
      isWebpSupportedFlag: null,
      isMobileView: false
    };
  },
  methods: {
    getProperBackground() {
      return `strategic-home-wrapper__background--${
        this.isMobileView ? 'mob' : 'desk'
      }-${this.isWebpSupportedFlag ? 'webp' : 'jpg'}`;
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
    })();
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/home/strategic.scss';
</style>

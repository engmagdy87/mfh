<template>
  <div class="contact-about-wrapper">
    <div class="contact-about-wrapper__column--1" />
    <div class="contact-about-wrapper__column--2">
      <p class="contact-about-wrapper__column--2__title">
        Medaf Finance Holding
      </p>
      <h1>Get in Touch</h1>
      <div class="contact-about-wrapper__column--2__grid">
        <div>
          <p
            class="contact-about-wrapper__column--2__sector"
            style="margin-left: 19%; margin-bottom: 10px;"
          >
            Head Office
          </p>
          <p
            class="contact-about-wrapper__column--2__sector"
            style="margin-left: 19%; margin-bottom:2%;"
          >
            <strong>Cairo</strong>
          </p>
          <div class="contact-about-wrapper__column--2__grid--item-head">
            <div><PhoneIcon /></div>
            <div>
              <p>(+2) 02-24619581</p>
              <p>(+2) 02-24619582</p>
              <p>(+2) 02-24619583</p>
            </div>
          </div>
          <div class="contact-about-wrapper__column--2__grid--item-head">
            <div><EnvelopIcon /></div>
            <div>
              <p>info@medafinvestment.com</p>
            </div>
          </div>
          <div class="contact-about-wrapper__column--2__grid--item-head">
            <div><PinIcon /></div>
            <div>
              <p>27<sup>th</sup> Floor, North Tower 2005 C</p>
              <p>Nile City Towers</p>
              <p>Cornich El Nile, Ramlet Beaulac</p>
              <p>Post Code: 11221</p>
              <p>Cairo, Egypt</p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps?ll=30.071548,31.227826&z=16&t=m&hl=en&gl=EG&mapclient=embed&cid=8346407453835388533"
            target="__blank"
          >
            <div
              class="contact-about-wrapper__column--2__grid--item-head"
              style="margin-top: 0px;margin-bottom: 30px;"
            >
              <span>GET DIRECTIONS </span><ArrowIcon />
            </div>
          </a>
        </div>
        <div>
          <div class="contact-about-wrapper__column--2__grid--item-europe">
            <div>
              <p><strong>London</strong></p>
              <p>24<sup>th</sup> Floor, The Shard,</p>
              <p>32 London Bridge St,</p>
              <p>London, SE19SG, UK</p>
            </div>
          </div>
          <div class="contact-about-wrapper__column--2__grid--item-europe">
            <div>
              <p><strong>Zurich</strong></p>
            </div>
          </div>
          <div class="contact-about-wrapper__column--2__grid--item-europe">
            <div>
              <p><strong>Kuwait City</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer :innerPage="true" :isDarkTheme="isDarkTheme" />
  </div>
</template>

<script>
const Footer = () => import('../shared/Footer');
import EnvelopIcon from '../assets/images/svg/mail.svg';
import ArrowIcon from '../assets/images/svg/arrow.svg';
import PhoneIcon from '../assets/images/svg/phone.svg';
import PinIcon from '../assets/images/svg/pin.svg';

export default {
  data() {
    return {
      isMobileView: false
    };
  },
  components: { Footer, EnvelopIcon, ArrowIcon, PhoneIcon, PinIcon },
  mounted() {
    const phone = window.matchMedia('(max-width:575px)');
    const desktop = window.matchMedia(
      '(min-width:992px) and (max-width: 1199px)'
    );
    const landscapDesktop = window.matchMedia(
      '(min-width: 1200px) and (max-width: 1600px) and (min-height: 400px) and (max-height: 800px)'
    );
    if (phone.matches || desktop.matches || landscapDesktop.matches) {
      this.isMobileView = true;
    }
  },
  methods: {
    isDarkTheme() {
      return !window.matchMedia('(max-width:575px)').matches;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/contact.scss';
</style>

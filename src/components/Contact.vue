<template>
  <div class="contact-about-wrapper">
    <div class="contact-about-wrapper__column--1" />
    <div class="contact-about-wrapper__column--2">
      <p class="contact-about-wrapper__column--2__title">
        Medaf Finance Holding
      </p>
      <h1>Get in Touch</h1>
      <p class="contact-about-wrapper__column--2__sector" v-if="!isMobileView">
        Head Office
      </p>
      <div class="contact-about-wrapper__column--2__grid">
        <div>
          <p
            class="contact-about-wrapper__column--2__sector"
            v-if="isMobileView"
            style="margin-left: 19%;"
          >
            Head Office
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
              <p><strong>Cairo</strong></p>
              <p>27<sup>th</sup> Floor, North Tower 2005 C</p>
              <p>Nile City Towers Cornich El Nile</p>
              <p>Ramlet Beaulac</p>
            </div>
          </div>
          <div
            class="contact-about-wrapper__column--2__grid--item-head"
            v-if="!isMobileView"
          >
            <span> GET DIRECTIONS </span><ArrowIcon />
          </div>
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
          <div
            class="contact-about-wrapper__column--2__grid--item-europe"
            v-if="isMobileView"
          >
            <span> GET DIRECTIONS<ArrowIcon /> </span>
          </div>
        </div>
      </div>
    </div>
    <Footer :innerPage="true" :isDarkTheme="!isMobileView" />
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
    if (phone.matches) {
      this.isMobileView = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/contact.scss';
</style>

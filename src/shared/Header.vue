<template>
  <nav class="header-wrapper" role="navigation" aria-label="main navigation">
    <div class="header-wrapper__brand">
      <a class="header-wrapper__item" href="#home">
        <MFHLogo
          :class="[
            'svg-logo',
            isLogoAnimated ? 'svg-logo--animate-logo' : '',
            isLightLogo ? 'svg-logo--light-logo' : ''
          ]"
        />
      </a>
    </div>
    <ul class="header-wrapper__items">
      <li
        :class="[
          'header-wrapper__item',
          activeItem === 'home' ? 'is-active' : ''
        ]"
      >
        <a href="#home" :class="[isLightTheme ? 'light-theme' : 'dark-theme']">
          home
        </a>
      </li>
      <li :class="['dropdown', activeItem === 'about' ? 'is-active' : '']">
        <a
          href="javascript:void(0)"
          :class="[
            'header-wrapper__dropbtn',
            isLightTheme ? 'light-theme' : 'dark-theme'
          ]"
          >about</a
        >

        <div :class="['dropdown-content']">
          <a
            href="#people"
            :class="[isLightTheme ? 'light-theme' : 'dark-theme']"
          >
            people
          </a>
          <a
            href="#business"
            :class="[isLightTheme ? 'light-theme' : 'dark-theme']"
          >
            business
          </a>
        </div>
      </li>
      <li
        :class="[
          'header-wrapper__item',
          activeItem === 'services' ? 'is-active' : ''
        ]"
      >
        <a
          href="#services"
          :class="[isLightTheme ? 'light-theme' : 'dark-theme']"
          >services</a
        >
      </li>
      <li
        :class="[
          'header-wrapper__item',
          activeItem === 'contact' ? 'is-active' : ''
        ]"
      >
        <a
          href="#contact"
          :class="[isLightTheme ? 'light-theme' : 'dark-theme']"
        >
          contact</a
        >
      </li>
      <li
        :class="[
          'header-wrapper__item',
          isLightTheme ? 'light-theme' : 'dark-theme'
        ]"
      >
        <div @click="openNavMenu">
          <a href="javascript:void(0)">
            <span
              :class="['hamburger', isNavMenuClicked ? 'active' : '']"
            ></span>
          </a>
        </div>
        <div :class="['navigation-menu', isNavMenuClicked ? 'active' : '']">
          <a class="closebtn" @click="closeNavMenu">
            &times;
          </a>
          <ul>
            <li><a @click="closeNavMenu" href="#home">HOME</a></li>
            <li><a @click="closeNavMenu" href="#about">ABOUT</a></li>
            <li><a @click="closeNavMenu" href="#services">SERVICES</a></li>
            <li><a @click="closeNavMenu" href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import MFHLogo from '../assets/images/logo-dark.svg';

export default {
  props: ['isLogoAnimated', 'isLightLogo', 'activeItem'],
  data() {
    return {
      isLightTheme: true,
      isNavMenuClicked: false
    };
  },
  components: { MFHLogo },
  methods: {
    openNavMenu() {
      this.isNavMenuClicked = true;
    },
    closeNavMenu() {
      this.isNavMenuClicked = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLightTheme = false;
    }, 6000);
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/shared/header.scss';
</style>

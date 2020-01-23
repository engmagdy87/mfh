<template>
  <nav
    class="navbar header-wrapper"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="#home">
        <MFHLogo
          :class="[
            'svg-logo',
            isLogoAnimated ? 'svg-logo--animate-logo' : '',
            isLightLogo ? 'svg-logo--light-logo' : ''
          ]"
        />
      </a>
    </div>
    <div class="navbar-end">
      <a
        :class="[
          'navbar-item',
          isLightTheme ? 'light-theme' : 'dark-theme',
          activeItem === 'home' ? 'is-active' : ''
        ]"
        href="#home"
      >
        home
      </a>
      <div
        :class="[
          'navbar-item has-dropdown is-hoverable',
          isLightTheme ? 'light-theme' : 'dark-theme'
        ]"
      >
        <a
          :class="[
            'navbar-link',
            isLightTheme ? 'light-theme-dropdown' : 'dark-theme-dropdown',
            activeItem === 'about' ? 'is-active' : ''
          ]"
          href="#about"
        >
          about
        </a>

        <div
          :class="[
            'navbar-dropdown',
            isLightTheme ? 'light-theme' : 'dark-theme'
          ]"
        >
          <a
            :class="[
              'navbar-item',
              isLightTheme ? 'light-theme' : 'dark-theme'
            ]"
            href="#people"
          >
            people
          </a>
          <a
            :class="[
              'navbar-item',
              isLightTheme ? 'light-theme' : 'dark-theme'
            ]"
            href="#business"
          >
            business
          </a>
        </div>
      </div>
      <a
        :class="[
          'navbar-item',
          isLightTheme ? 'light-theme' : 'dark-theme',
          activeItem === 'services' ? 'is-active' : ''
        ]"
      >
        services
      </a>
      <a
        :class="[
          'navbar-item',
          isLightTheme ? 'light-theme' : 'dark-theme',
          activeItem === 'contact' ? 'is-active' : ''
        ]"
      >
        contact
      </a>
      <div
        :class="['navbar-item', isLightTheme ? 'light-theme' : 'dark-theme']"
      >
        <div class="navbar-item menu-icon" @click="openNavMenu">
          <span :class="['hamburger', isNavMenuClicked ? 'active' : '']"></span>
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
      </div>
    </div>
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

<template>
  <nav class="header-wrapper" role="navigation" aria-label="main navigation">
    <div class="header-wrapper__brand">
      <a class="header-wrapper__item" href="#home" @click="closeNavMenu">
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
          activeItem === 'home' ? 'header-wrapper__is-active' : ''
        ]"
      >
        <a
          href="#home"
          @click="closeNavMenu"
          :class="[isLightTheme ? 'light-theme' : 'dark-theme']"
        >
          home
        </a>
      </li>
      <li
        :class="[
          'dropdown',
          activeItem === 'about' ? 'header-wrapper__is-active' : ''
        ]"
      >
        <a
          href="javascript:void(0)"
          @click="closeNavMenu"
          :class="[
            'header-wrapper__dropbtn',
            isLightTheme ? 'light-theme' : 'dark-theme',
            activeItem === 'people' || activeItem === 'business'
              ? 'header-wrapper__is-active'
              : ''
          ]"
          >about</a
        >

        <div :class="['dropdown-content']">
          <a
            href="#about-people"
            :class="[
              isLightTheme ? 'light-theme' : 'dark-theme',
              activeItem === 'people' ? 'header-wrapper__is-active' : ''
            ]"
            @click="closeNavMenu('people')"
          >
            people
          </a>
          <a
            href="#about-business"
            @click="closeNavMenu"
            :class="[
              isLightTheme ? 'light-theme' : 'dark-theme',
              activeItem === 'business' ? 'header-wrapper__is-active' : ''
            ]"
          >
            business
          </a>
        </div>
      </li>
      <li
        :class="[
          'header-wrapper__item',
          activeItem === 'services' ? 'header-wrapper__is-active' : ''
        ]"
      >
        <a
          href="#services"
          @click="closeNavMenu"
          :class="[isLightTheme ? 'light-theme' : 'dark-theme']"
          >services</a
        >
      </li>
      <li
        :class="[
          'header-wrapper__item',
          activeItem === 'contact' ? 'header-wrapper__is-active' : ''
        ]"
      >
        <a
          href="#contact"
          @click="closeNavMenu"
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
            <li :class="[activeItem === 'home' ? 'active' : '']">
              <a @click="closeNavMenu" href="#home">HOME</a>
            </li>
            <li
              :class="[
                activeItem === 'people' || activeItem === 'business'
                  ? 'active'
                  : ''
              ]"
            >
              <a @click="closeNavMenu('people')" href="#about-people">ABOUT</a>
            </li>
            <li :class="[activeItem === 'services' ? 'active' : '']">
              <a @click="closeNavMenu" href="#services">SERVICES</a>
            </li>
            <li :class="[activeItem === 'contact' ? 'active' : '']">
              <a @click="closeNavMenu" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import MFHLogo from '../assets/images/logo-dark.svg';

export default {
  props: ['isLogoAnimated', 'isLightLogo', 'activeItem', 'closeOurTeam'],
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
    closeNavMenu(item) {
      this.isNavMenuClicked = false;
      if (item !== 'people') {
        this.closeOurTeam();
      }
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

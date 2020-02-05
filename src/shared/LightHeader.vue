<template>
  <nav class="header-wrapper" role="navigation" aria-label="main navigation">
    <div class="header-wrapper__brand">
      <a class="header-wrapper__item" href="#home" @click="closeNavMenu">
        <MFHLogo
          :class="
            isMobileView
              ? 'svg-logo svg-logo--light-logo'
              : 'svg-logo svg-logo--dark-logo'
          "
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
        <a href="#home" @click="closeNavMenu" class="light-theme">
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
            'header-wrapper__dropbtn light-theme',
            activeItem === 'people' || activeItem === 'business'
              ? 'header-wrapper__is-active'
              : ''
          ]"
          >about</a
        >

        <div :class="['dropdown-content__light']">
          <a
            href="#about-people"
            @click="closeNavMenu"
            :class="[
              'light-theme',
              activeItem === 'people' ? 'header-wrapper__is-active' : ''
            ]"
          >
            people
          </a>
          <a
            href="#about-business"
            :class="[
              'light-theme',
              activeItem === 'business' ? 'header-wrapper__is-active' : ''
            ]"
            @click="closeNavMenu('people')"
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
        <a href="#services" @click="closeNavMenu" class="light-theme"
          >services</a
        >
      </li>
      <li
        :class="[
          'header-wrapper__item',
          activeItem === 'contact' ? 'header-wrapper__is-active' : ''
        ]"
      >
        <a href="#contact" @click="closeNavMenu" class="light-theme">
          contact</a
        >
      </li>
      <li class="header-wrapper__item light-theme">
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
  props: ['activeItem', 'isMobileView', 'closeOurTeam'],
  data() {
    return {
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
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/shared/header.scss';
</style>

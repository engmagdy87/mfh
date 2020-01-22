<template>
  <nav
    class="navbar header-wrapper"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
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
      <a :class="['navbar-item', isLightTheme ? 'light-theme' : 'dark-theme']">
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
            isLightTheme ? 'light-theme-dropdown' : 'dark-theme-dropdown'
          ]"
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
          >
            people
          </a>
          <a
            :class="[
              'navbar-item',
              isLightTheme ? 'light-theme' : 'dark-theme'
            ]"
          >
            business
          </a>
        </div>
      </div>
      <a :class="['navbar-item', isLightTheme ? 'light-theme' : 'dark-theme']">
        services
      </a>
      <a :class="['navbar-item', isLightTheme ? 'light-theme' : 'dark-theme']">
        contact
      </a>
    </div>
  </nav>
</template>

<script>
import MFHLogo from '../assets/images/logo-dark.svg';

export default {
  props: ['isLogoAnimated', 'isLightLogo'],
  data() {
    return {
      isLightTheme: true
    };
  },
  components: { MFHLogo },
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

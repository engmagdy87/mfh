<template>
  <div id="team-member-modal" class="overlay">
    <a class="closebtn" @click="closeNav">
      &times;
    </a>
    <div class="overlay-content">
      {{ bio }}
      {{ bio }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['openModalFlag', 'closeModal', 'bio'],
  methods: {
    openNav() {
      document.getElementById('team-member-modal').style.height = '100%';
    },

    closeNav() {
      document.getElementById('team-member-modal').style.height = '0%';
      this.closeModal();
    }
  },
  watch: {
    openModalFlag: function() {
      if (this.openModalFlag) this.openNav();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/color-palette.scss';
@import '../assets/styles/mixins.scss';

.overlay {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: $overlay-dark;
  overflow-y: hidden;
  transition: 0.5s;
}

.overlay-content {
  width: calc(100% - 60px);
  text-align: justify;
  line-height: 22px;
  height: 80%;
  overflow-y: scroll;
  font-size: 17px;
  margin-top: 100px;
  padding: 0 30px;
  color: $gray;
  &__text {
    &--active {
      color: $secondary !important;
    }
    @include is-mobile {
      font-size: 1.6rem !important;
    }
  }
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: $light-cyan;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: $light-cyan;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 40px;
  cursor: pointer;
}

@media screen and (max-height: 450px) {
  .overlay {
    overflow-y: auto;

    -webkit-overflow-scrolling: touch;
  }
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>

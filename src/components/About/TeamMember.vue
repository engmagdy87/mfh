<template>
  <div class="team-member-wrapper">
    <div
      :class="[
        'team-member-wrapper__card',
        isCardClicked
          ? 'team-member-wrapper__card--shrink'
          : 'team-member-wrapper__card--expand'
      ]"
      @click="onCardClicked"
    >
      <img
        :src="require(`@/assets/images/team/${member.image}`)"
        class="team-member-wrapper__card__img"
      />
      <p class="team-member-wrapper__card__name">
        {{ member.name }}
      </p>
      <p class="team-member-wrapper__card__title">
        {{ member.title }}
      </p>
      <div class="team-member-wrapper__card__rewards">
        <Antivirus />
        <StarMedal />
        <Trophy />
      </div>
    </div>
    <div
      :class="[
        'team-member-wrapper__details',
        isCardClicked
          ? 'team-member-wrapper__details--show'
          : 'team-member-wrapper__details--hide'
      ]"
      v-if="isCardClicked"
    >
      <a class="team-member-wrapper__details__closebtn" @click="closeCard">
        &times;
      </a>
      <div class="team-member-wrapper__details__bio">
        {{ member.bio }}
      </div>
    </div>
  </div>
</template>

<script>
import Antivirus from '../../assets/images/svg/antivirus.svg';
import StarMedal from '../../assets/images/svg/star-medal.svg';
import Trophy from '../../assets/images/svg/trophy.svg';

export default {
  props: [
    'member',
    'slideId',
    'cardClicked',
    'isPaginationClickedFlag',
    'openModal'
  ],
  data() {
    return {
      isCardClicked: false
    };
  },
  methods: {
    closeCard() {
      this.isCardClicked = false;
      document
        .getElementsByClassName(`slide${this.slideId}`)[0]
        .classList.remove('expand-card');
    },
    onCardClicked() {
      const phone = window.matchMedia('(max-width:575px)');
      const landscapePhone = window.matchMedia(
        '(min-width:576px) and (max-width: 767px)'
      );
      const tablet = window.matchMedia(
        '(min-width:768px) and (max-width: 991px)'
      );
      if (phone.matches || landscapePhone.matches || tablet.matches) {
        this.openModal(this.member.bio);
      } else {
        document
          .getElementsByClassName(`slide${this.slideId}`)[0]
          .classList.add('expand-card');
        this.isCardClicked = true;
        this.cardClicked();
      }
    }
  },
  watch: {
    isPaginationClickedFlag: function() {
      if (this.isPaginationClickedFlag) this.closeCard();
    }
  },
  components: {
    Antivirus,
    StarMedal,
    Trophy
  }
};
</script>

<style lang="scss">
@import '../../assets/styles/grid-layout.scss';
@import '../../assets/styles/components/about/team-member.scss';
</style>

<template>
  <div class="people-about-wrapper">
    <div class="people-about-wrapper__content">
      <div
        :class="[
          'people-about-wrapper__description',
          isOurPeopleClicked
            ? 'people-about-wrapper__description__reduced'
            : 'people-about-wrapper__description__expand'
        ]"
      >
        <div
          v-if="isWebpSupportedFlag !== null"
          :class="[
            'people-about-wrapper__hero-img',
            isWebpSupportedFlag
              ? 'people-about-wrapper__hero-img--webp'
              : 'people-about-wrapper__hero-img--jpg'
          ]"
        ></div>
        <div class="people-about-wrapper__text">
          <h1>People</h1>
          <p class="people-about-wrapper__paragraph">
            The MFH group is led by a Board of Directors consisting of nine
            individuals, a select group of heavyweights with financial, banking
            and entrepreneurial backgrounds, handpicked from the region and
            globally to enhance both the entrepreneurial and governance culture
            while ensuring knowledge transfer to the seasoned group of top
            management executives that run the day to day business.
          </p>
          <div class="people-about-wrapper__section-footer">
            <div>
              <p class="num">+100</p>
              <p class="year">years</p>
            </div>
            <div class="finance-wrapper">
              <p class="knowledge">Knowledge and Expertise</p>
              <p class="finance">in Finance</p>
            </div>
          </div>
          <a href="#our-people" @click="reducePeopleWidth" v-if="isMobileView">
            <div
              class="people-about-wrapper__meet-our-people"
              :style="
                isOurPeopleClicked ? 'visibility:hidden' : 'visibility:visible'
              "
            >
              <span>MEET</span><span class="strong-text">OUR PEOPLE</span
              ><RightArrow />
            </div>
          </a>
        </div>
      </div>
      <div class="people-about-wrapper__team">
        <span
          class="people-about-wrapper__team__board"
          :style="isOurPeopleClicked ? 'display:none' : 'display:block'"
          >The Board</span
        >
        <carousel
          v-if="perPageSlides !== 0"
          :per-page="perPageSlides"
          :mouse-drag="false"
          paginationColor="gray"
          paginationActiveColor="white"
          class="carousel"
          @pagination-click="paginationClicked"
        >
          <slide
            v-for="(member, index) in teamData"
            :class="['slide', `slide${index}`]"
            :key="index"
          >
            <TeamMember
              :member="member"
              :slideId="index"
              :cardClicked="cardClicked"
              :isPaginationClickedFlag="isPaginationClickedFlag"
              :openModal="openModal"
            />
          </slide>
        </carousel>
      </div>
      <a href="#about-people" @click="expandPeopleWidth">
        <div
          class="people-about-wrapper__team__return-people"
          :style="
            !isOurPeopleClicked ? 'visibility:hidden' : 'visibility:visible'
          "
        >
          <RightArrow /><span class="strong-text">RETURN</span>
        </div>
      </a>
    </div>
    <Footer
      :innerPage="true"
      :style="isOurPeopleClicked ? 'visibility:hidden' : 'visibility:visible'"
    />
    <a href="#our-people" @click="reducePeopleWidth" v-if="!isMobileView">
      <div
        class="people-about-wrapper__meet-our-people"
        :style="isOurPeopleClicked ? 'visibility:hidden' : 'visibility:visible'"
      >
        <span>MEET</span><span class="strong-text">OUR PEOPLE</span
        ><RightArrow />
      </div>
    </a>
    <TeamMemberModal
      :openModalFlag="openModalFlag"
      :closeModal="closeModal"
      :bio="memberBio"
    />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import TeamMemberModal from '../../shared/TeamMemberModal';
import RightArrow from '../../assets/images/svg/right.svg';
import teamData from '../../assets/json/team.json';
import isWebpSupported from '../../helper/WebpDetectionHelper';

const TeamMember = () => import('../../components/About/TeamMember');
const Footer = () => import('../../shared/Footer');

export default {
  props: ['isMobileView'],
  data() {
    return {
      teamData,
      isPaginationClickedFlag: false,
      isOurPeopleClicked: false,
      perPageSlides: 0,
      targetSlideId: 0,
      openModalFlag: false,
      memberBio: '',
      isWebpSupportedFlag: null
    };
  },
  methods: {
    openModal(bio) {
      this.openModalFlag = true;
      this.memberBio = bio;
    },
    closeModal() {
      this.openModalFlag = false;
    },
    paginationClicked() {
      this.isPaginationClickedFlag = true;
    },
    cardClicked() {
      this.isPaginationClickedFlag = false;
    },
    reducePeopleWidth() {
      this.isOurPeopleClicked = true;
    },
    expandPeopleWidth() {
      this.isOurPeopleClicked = false;
    },
    getNumOfShownSlides() {
      const phone = window.matchMedia('(max-width:575px)');
      const landscapePhone = window.matchMedia(
        '(min-width:576px) and (max-width: 767px)'
      );
      const tablet = window.matchMedia(
        '(min-width:768px) and (max-width: 991px)'
      );
      const desktop = window.matchMedia(
        '(min-width:992px) and (max-width: 1199px)'
      );
      const largeDesktop = window.matchMedia(
        '(min-width:1200px)  and (max-width: 1399px)'
      );
      const veryLargeDesktop = window.matchMedia('(min-width:1400px)');

      if (phone.matches) {
        this.perPageSlides = 1;
        this.targetSlideId = 0;
      }

      if (landscapePhone.matches) {
        this.perPageSlides = 2;
        this.targetSlideId = 1;
      }

      if (tablet.matches) {
        this.perPageSlides = 3;
        this.targetSlideId = 2;
      }

      if (desktop.matches) {
        this.perPageSlides = 4;
        this.targetSlideId = 4;
      }

      if (largeDesktop.matches) {
        this.perPageSlides = 5;
        this.targetSlideId = 5;
      }
      if (veryLargeDesktop.matches) {
        this.perPageSlides = 5;
        this.targetSlideId = 6;
      }
    }
  },
  mounted() {
    this.getNumOfShownSlides();
    (async () => {
      this.isWebpSupportedFlag = await isWebpSupported();
    })();
  },
  components: {
    Carousel,
    Slide,
    TeamMember,
    Footer,
    RightArrow,
    TeamMemberModal
  }
};
</script>

<style lang="scss">
@import '../../assets/styles/components/about/people.scss';
</style>

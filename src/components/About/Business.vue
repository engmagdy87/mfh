<template>
  <div class="business-about-wrapper">
    <div class="business-about-wrapper__column--1" />
    <div class="business-about-wrapper__column--2">
      <h1>Business</h1>
      <diV>
        <p>
          MFH is continuously innovating and developing new strategies across
          the group that allow clients to
          <strong
            >benefit from what matters; a promising return on
            investment.</strong
          >
        </p>
        <p>
          Our business model is aligned with best practices of local and global
          institutional investors, while remaining dynamic and reactive to
          market changes.
        </p>
        <p>
          MFH has several focus business sectors in which
          <strong>we provide significant opportunities for our clients:</strong>
        </p>
        <ul>
          <li>Aviation</li>
          <li>Education</li>
          <li>International trade</li>
          <li>Leisure & Entertainment</li>
          <li>Mining</li>
          <li>Tourism & Hospitality</li>
          <li>Waste management</li>
        </ul>
      </diV>
    </div>
    <Footer :innerPage="true" />
  </div>
</template>

<script>
const Footer = () => import('../../shared/Footer');

export default {
  components: { Footer }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/about/business.scss';
</style>

<template>
  <!-- Hero Section -->
  <app-bubbles></app-bubbles>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__logo">Kirill Panfile<span>.</span></div>
      <div class="hero__content">
        <div class="hero__content-title">
          Hello!👋🏻 <br />
          My name is Kirill <br />
          I’m a Frontend <span>Developer</span>
        </div>
        <div class="hero__content-descr">
          Let me help you grow your business and make your product look pretty
          while at it
        </div>
        <div class="hero__content-button">
          <app-button>Say Hello</app-button>
        </div>
      </div>
      <app-menu></app-menu>
    </div>
  </div>
</template>

<script>
import appButton from "../components/appButton.vue";
import appBubbles from "../components/appBubbles.vue";
export default {
  name: "home",
  components: {
    appButton,
    appBubbles,
  },
};
</script>

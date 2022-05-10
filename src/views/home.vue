<template>
  <!-- Hero Section -->
  <div class="hero">
    <div class="hero__container">
      <app-logo></app-logo>
      <div class="hero__content">
        <app-canvas class="canvas"></app-canvas>
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
          <router-link to="/portfolio">
            <app-button>View Portfolio</app-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appCanvas from "../components/appCanvas.vue";
export default {
  name: "home",
  components: {
    appCanvas,
  },
};
</script>

<style></style>

<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__logo">Ololades<span>.</span></div>
      <div class="hero__content">
        <div class="hero__content-title">
          Hello!👋🏻 <br />
          My name is Ololade <br />
          I’m a Product <span>Designer</span>
        </div>
        <div class="hero__content-descr">
          Let me help you grow your business and make your product look pretty
          while at it
        </div>
        <div class="hero__content-button">
          <app-button>Say Hello</app-button>
        </div>
      </div>
      <div class="menu">
        <app-menu></app-menu>
      </div>
    </div>
  </div>
</template>

<script>
import appButton from "../components/appButton.vue";
import appMenu from "../components/appMenu.vue";
export default {
  name: "home",
  components: {
    appButton,
    appMenu,
  },
};
</script>

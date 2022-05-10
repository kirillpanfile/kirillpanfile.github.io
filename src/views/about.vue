<template>
  <div class="about">
    <div class="about__container">
      <div class="about-inner">
        <app-logo></app-logo>
        <h1 class="about-inner__title">About Me 👨‍</h1>
        <p class="about-inner__description">
          A brief intro to who i am and how i do what i do:
        </p>
        <div class="about-inner__content about-content">
          <div class="about-content__title">I am <span>Kirill</span></div>
          <div class="about-content__image">
            <img src="../assets/me.png" alt="" />
          </div>
          <div class="about-content__description">
            {{ description }}
          </div>
          <div class="about-content__description">
            <ul v-for="(fact, index) in facts" :key="index">
              <li>{{ fact }}</li>
            </ul>
          </div>
          <div class="about-button">
            <app-button>Download CV</app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "about",
  computed: {
    ...mapState({
      description: (state) => state.description,
      facts: (state) => state.facts,
    }),
  },
};
</script>

<style></style>

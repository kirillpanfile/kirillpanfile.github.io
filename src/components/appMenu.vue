<template>
  <div class="menu">
    <div class="menu__inner">
      <router-link to="/" @click.native="scrollToTop">
        <button class="menu-icon">
          <img v-if="getDarkMode === true" src="../assets/icons/1.png" alt="" />
          <img
            v-else-if="checkRoute('home')"
            src="../assets/icons/1.png"
            alt=""
          />
          <img v-else src="../assets/darkicons/1.png" alt="" />
        </button>
      </router-link>
      <router-link to="/portfolio" @click.native="scrollToTop">
        <button class="menu-icon">
          <img v-if="getDarkMode === true" src="../assets/icons/2.png" alt="" />
          <img
            v-else-if="checkRoute('portfolio')"
            src="../assets/icons/2.png"
            alt=""
          />
          <img v-else src="../assets/darkicons/2.png" alt="" />
        </button>
      </router-link>
      <router-link to="/about" @click.native="scrollToTop">
        <button class="menu-icon">
          <img v-if="getDarkMode === true" src="../assets/icons/3.png" alt="" />
          <img
            v-else-if="checkRoute('about')"
            src="../assets/icons/3.png"
            alt=""
          />
          <img v-else src="../assets/darkicons/3.png" alt="" />
        </button>
      </router-link>
      <a href="mailto:kirillpanfile@gmail.com">
        <button class="menu-icon">
          <img v-if="getDarkMode === true" src="../assets/icons/4.png" alt="" />
          <img v-else src="../assets/darkicons/4.png" alt="" />
        </button>
      </a>
      <a href="https://github.com/kirillpanfile" target="_blank">
        <button class="menu-icon">
          <img v-if="getDarkMode === true" src="../assets/icons/5.png" alt="" />
          <img v-else src="../assets/darkicons/5.png" alt="" />
        </button>
      </a>
      <button class="menu-icon" @click="changeMode">
        <img v-if="getDarkMode === true" src="../assets/icons/6.png" alt="" />
        <img
          v-if="getDarkMode === false"
          src="../assets/darkicons/6.png"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "appMenu",
  computed: {
    ...mapState({
      getDarkMode: (state) => state.DarkMode,
    }),
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    changeMode() {
      this.$store.commit("changeMode");
      if (this.getDarkMode === false) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
      if (this.getDarkMode === true) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      }
    },
    checkRoute(route) {
      return this.$route.matched.some((record) => record.name === route);
    },
  },
};
</script>

<style></style>

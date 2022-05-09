<template>
  <div class="menu">
    <div class="menu__inner">
      <router-link to="/" @click.native="scrollToTop">
        <button class="menu-icon">
          <img src="../assets/icons/1.png" alt="" />
        </button>
      </router-link>
      <router-link to="/portfolio" @click.native="scrollToTop">
        <button class="menu-icon">
          <img src="../assets/icons/2.png" alt="" />
        </button>
      </router-link>
      <router-link to="/about" @click.native="scrollToTop">
        <button class="menu-icon">
          <img src="../assets/icons/3.png" alt="" />
        </button>
      </router-link>
      <a href="mailto:kirillpanfile@gmail.com">
        <button class="menu-icon">
          <img src="../assets/icons/4.png" alt="" />
        </button>
      </a>
      <a href="">
        <button class="menu-icon">
          <img src="../assets/icons/5.png" alt="" />
        </button>
      </a>
      <a href="">
        <button class="menu-icon">
          <img src="../assets/icons/6.png" alt="" />
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "appMenu",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>

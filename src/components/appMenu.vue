<template>
  <div class="menu">
    <div class="menu__inner">
      <div v-for="(icon, index) in icons.count" :key="index">
        <router-link :to="icons.pages[index]" v-if="icon < 3">
          <button class="menu-icon">
            <img :src="require(`../assets/icons/${icon}.png`)" alt="" />
          </button>
        </router-link>
        <a v-else>
          <button class="menu-icon">
            <img :src="require(`../assets/icons/${icon}.png`)" alt="" />
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appMenu",
  data() {
    return {
      icons: {
        count: [1, 2, 3, 4, 5, 6],
        pages: ["/", "/portfolio", "/about"],
      },
    };
  },
};
</script>

<style></style>

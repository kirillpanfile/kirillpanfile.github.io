<template>
  <div class="menu">
    <div class="menu__inner">
      <div class="menu-icon" v-for="(icon, index) in icons" :key="index">
        <img :src="require(`../assets/icons/${icon}.png`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appMenu",
  data() {
    return {
      icons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
};
</script>

<style></style>

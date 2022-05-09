<template>
  <app-bubbles></app-bubbles>
  <router-view />
  <!-- App Menu-->
  <app-menu></app-menu>
</template>
<script>
import appMenu from "./components/appMenu.vue";
import appBubbles from "./components/appBubbles.vue";
export default {
  name: "app",
  components: {
    appMenu,
    appBubbles,
  },
  mounted() {},
};
</script>
<style lang="scss">
* {
  cursor: url("https://www.pixelliongroup.com/img/cursor.png"), auto;
}
*:hover {
  cursor: url("https://www.pixelliongroup.com/img/cursor.png"), auto;
}
#app {
  position: relative;
  min-height: 100vh;
}
</style>

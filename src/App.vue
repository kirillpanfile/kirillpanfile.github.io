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
#app {
  position: relative;
  min-height: 100vh;
}
</style>

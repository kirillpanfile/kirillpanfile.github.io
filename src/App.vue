<template>
  <router-view />
  <app-menu></app-menu>
</template>
<script>
import appMenu from "./components/appMenu.vue";
export default {
  name: "app",
  components: {
    appMenu,
  },
};
</script>
<style lang="scss"></style>

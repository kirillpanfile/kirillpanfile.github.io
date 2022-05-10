<template>
  <main :class="{ light: getDarkMode == false }">
    <app-bubbles v-if="this.$route.name == 'home'"></app-bubbles>
    <transition name="scale" mode="out-in">
      <router-view />
    </transition>
    <app-menu></app-menu>
  </main>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapState({
      getDarkMode: (state) => state.DarkMode,
    }),
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
    this.$store.dispatch("fetchDescription");
  },
};
</script>
<style lang="scss">
#app {
  position: relative;
  min-height: 100vh;
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.8s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>

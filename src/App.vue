<template>
  <transition name="scale" v-if="isLoading">
    <app-loader></app-loader>
  </transition>
  <main v-else>
    <app-bubbles v-if="this.$route.name == 'home'"></app-bubbles>
    <transition name="scale" mode="out-in">
      <router-view />
    </transition>
    <app-menu></app-menu>
  </main>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
    this.$store.dispatch("fetchDescription");
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
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

.active {
  display: block;
}
.hidden {
  display: none;
}
</style>

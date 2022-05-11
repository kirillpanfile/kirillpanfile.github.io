<template>
  <div class="projects">
    <div class="projects__container">
      <app-logo></app-logo>
      <div class="projects-inner">
        <div class="projects-inner__title">Projects 💡</div>
        <div class="projects-inner__descr">
          Some things i’ve been working on in the past few years:
        </div>
        <div class="projects-inner__list">
          <div
            class="projects-inner__list-item list-item"
            v-for="(project, index) in projects"
            :key="project.id"
            :class="{ reversed: (index + 1) % 2 != 0 }"
          >
            <div class="list-item__block list-block">
              <div class="list-block__title">🌌 {{ project.name }}</div>
              <div class="list-block__descr">
                {{ project.description }}
              </div>
              <div class="list-block__button">
                <a target="_blank" :href="project.link">
                  <app-button>View project</app-button>
                </a>
              </div>
            </div>
            <div class="list-item__block list-block">
              <div class="list-block__image">
                <img :src="require(`../assets/${project.img}`)" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="projects-inner__descr" style="width: 100%">
          💻 Ive got a lot of projects on my mind, but you can always check out
          my
          <a href="https://github.com/kirillpanfile" target="_blank">Github</a>
          profile.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "projects",
  computed: {
    ...mapState({
      projects: (state) => state.projects,
    }),
  },
};
</script>

<style></style>

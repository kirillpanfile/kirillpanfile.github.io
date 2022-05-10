import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    description: "",
    facts: "",
    projects: [],
    DarkMode : true
  },
  getters: {
    getDescription(state) {
      return state.description;
    },
    getFacts(state) {
      return state.facts;
    },
    getProjects(state) {
      return state.projects;
    },
    getDarkMode(state) {
      return state.DarkMode;
    }
  },
  mutations: {
    setDescription(state, payload) {
      state.description = payload;
    },
    setFacts(state, payload) {
      state.facts = payload;
    },
    setProjects(state, payload) {
      state.projects = payload;
    },
    changeMode(state) {
      state.DarkMode = !state.DarkMode;
    }
  },
  actions: {
    async fetchProjects({ commit }) {
      const response = await axios.get("/api/projects");
      commit("setProjects", response.data);
    },
    async fetchDescription({ commit }) {
      const response = await axios.get("/api/me");
      commit("setDescription", response.data[0].description);
      commit("setFacts", response.data[0].facts);
    },
    changeMode({ commit }) {
      commit("changeMode");
    }
  },
  modules: {},
});

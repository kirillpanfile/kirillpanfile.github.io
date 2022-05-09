import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    description: "",
    facts: "",
    projects: [],
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
  },
  actions: {
    async fetchProjects({ commit }) {
      const response = await axios.get("/api/projects");
      commit("setProjects", response.data);
      console.log(
        "🚀 ~ file: index.js ~ line 35 ~ fetchProjects ~ response.data",
        response.data
      );
    },
    async fetchDescription({ commit }) {
      const response = await axios.get("/api/me");
      commit("setDescription", response.data[0].description);
      console.log(
        "🚀 ~ file: index.js ~ line 43 ~ fetchDescription ~ response.data.description",
        response.data[0].description
      );
      commit("setFacts", response.data[0].facts);
      console.log(
        "🚀 ~ file: index.js ~ line 45 ~ fetchDescription ~ response.data.facts",
        response.data[0].facts
      );
    },
  },
  modules: {},
});

import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/portfolio.vue"),
    meta: {
      transition: "fade",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/about.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

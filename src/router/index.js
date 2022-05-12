import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/home.vue";
import portfolio from "../views/portfolio.vue";
import about from "../views/about.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    meta: {
      title: "Home",
      description: "Home page",
      keywords: "home, portfolio, about",
      image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      url: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      date: "2020-01-01",
    },
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: portfolio,
    meta: {
      transition: "fade",
    },
  },
  {
    path: "/about",
    name: "about",
    component: about,
    meta: {
      transition: "fade",
    }
  },
  {
    path: "/:catchall(.*)",
    redirect: "/"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

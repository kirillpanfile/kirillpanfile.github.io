import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/style.scss";
import components from "./components/main";
import server from "./server";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(store).use(router).use(server).mount("#app");

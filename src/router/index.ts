import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FirstPageView from "../views/FirstPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/first-page",
      name: "FirstPage",
      component: FirstPageView,
    },
  ],
});

export default router;

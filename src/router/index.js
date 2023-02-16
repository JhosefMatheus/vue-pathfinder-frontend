import { createRouter, createWebHistory } from "vue-router";

import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SignInView,
    },
    {
      path: "/signup",
      name: "about",
      component: SignUpView,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import PathfindersView from "../views/PathfindersView.vue";
import CreatePathfinderView from "../views/CreatePathfinderView.vue";
import EditPathfinderView from "../views/EditPathfinderView.vue";
import PathfinderClassesView from "../views/PathfinderClassesView.vue"; 
import PathfinderClassView from "../views/PathfinderClassView.vue";

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
      name: "register",
      component: SignUpView,
    },
    {
      path: "/pathfinders",
      name: "pathfinders",
      component: PathfindersView
    },
    {
      path: "/create",
      name: "create",
      component: CreatePathfinderView
    },
    {
      path: "/edit/:id",
      name: "editPathfinder",
      component: EditPathfinderView
    },
    {
      path: "/classes/:id",
      name: "pathfinderClasses",
      component: PathfinderClassesView
    },
    {
      path: "/class/:classId/:pathfinderId",
      name: "pathfinderClass",
      component: PathfinderClassView
    }
  ],
});

export default router;

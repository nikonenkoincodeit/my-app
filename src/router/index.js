import { createWebHistory, createRouter } from "vue-router";

import DocsView from "../pages/DocsView.vue";

const routes = [
  {
    path: "/",
    name: "docs",
    component: DocsView,
  },
  {
    path: "/process",
    name: "process",
    component: () => import("../pages/ProcessView.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

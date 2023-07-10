import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import indexVue from "@/views/index.vue";
import loginVue from "@/views/login.vue";
import callbackVue from "@/views/callback.vue";
import Success from "@/views/success.vue";
import Fail from "@/views/fail.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: indexVue,
  },
  {
    path: "/login",
    name: "login",
    component: loginVue,
  },
  {
    path: "/login/callback",
    name: "callback",
    component: callbackVue,
  },
  {
    path: "/success",
    name: "success",
    component: Success,
  },
  {
    path: "/fail",
    name: "fail",
    component: Fail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

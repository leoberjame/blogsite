import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginLandingPage",
    component: () => import("@/views/Login.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/components/LoginComponent.vue"),
        meta: {
          title: "Login",
          requiresAuth: false,
        },
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/components/RegisterComponent.vue"),
        meta: {
          title: "Register",
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Home",
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "About",
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    next({
      name: "Login",
    });
  } else {
    next();
  }
});

export default router;

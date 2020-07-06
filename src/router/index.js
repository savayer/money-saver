import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Bill",
    meta: { layout: "base", guestAccess: false },
    component: () => import("@/views/Bill")
  },
  {
    path: "/reports",
    name: "Reports",
    meta: { layout: "base", guestAccess: false },
    component: () => import("@/views/Reports")
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "auth", guestAccess: true },
    component: () => import("@/views/auth/Login")
  },
  {
    path: "/register",
    name: "Register",
    meta: { layout: "auth", guestAccess: true },
    component: () => import("@/views/auth/Register")
  },
  {
    path: "/history",
    name: "History",
    meta: { layout: "base", guestAccess: false },
    component: () => import("@/views/History")
  },
  {
    path: "/planning",
    name: "Planning",
    meta: { layout: "base", guestAccess: false },
    component: () => import("@/views/Planning")
  },
  {
    path: "/new-record",
    name: "NewRecord",
    meta: { layout: "base", guestAccess: false },
    component: () => import("@/views/NewRecord")
  },
  {
    path: "/detail-record",
    name: "DetailRecord",
    meta: { layout: "base", guestAccess: false },
    component: () => import("@/views/DetailRecord")
  },
  {
    path: "/categories",
    name: "Categories",
    meta: { layout: "base", guestAccess: false },
    component: () => import("@/views/Categories")
  },
  {
    path: "/categories2",
    name: "CategoriesPopup",
    meta: { layout: "base", guestAccess: false },
    component: () => import("@/views/CategoriesPopup")
  },
  {
    path: "/profile",
    name: "Profile",
    meta: { layout: "base", guestAccess: false },
    component: () => import("@/views/Profile")
  },
  {
    path: "/settings",
    name: "Settings",
    meta: { layout: "base", guestAccess: false },
    component: () => import("@/views/Settings")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;

  if (to.matched.some(record => record.meta.guestAccess) && currentUser) {
    next("/");
  }

  if (to.matched.some(record => !record.meta.guestAccess) && !currentUser) {
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router;

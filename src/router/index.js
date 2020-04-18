import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";
// @ts-ignore
import NewBlog from "../pages/NewBlog.vue";
//@ts-ignore
import SingleBlog from "../pages/SingleBlog.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/newblog",
    name: "NewBlog",
    component: NewBlog,
    beforeEnter: authGuard,
  },
  {
    path: "/singleblog",
    name: "SingleBlog",
    component: SingleBlog
  }
];

const router = new VueRouter({
  routes,
});

export default router;

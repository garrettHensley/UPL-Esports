import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Rules from '../views/Rules.vue';
import Heroes from "../views/Heroes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/rules",
    name: "Rules",
    component: Rules
  },
  {
    path: "/heroes",
    name: "Heroes",
    component: Heroes
  },
  {
    path: "/rules/:id",
    name: "RulesID",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "rules" */ "../views/Rules.vue")
  },
  {
    path: "/news/:id",
    name: "NewsID",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "article" */ "../views/News.vue")
  },
  {
    path: "/heroes/:id",
    name: "HeroesID",
    component: () =>
      import(/* webpackChunkName: "heroes" */ "../views/Heroes.vue")
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;

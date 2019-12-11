/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"; //主页面
import Login from "../views/Login.vue"; //登录页面
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [
      /* 二级路由 */
      {
        /* 工作台 */
        path: "/Home",
        component: () =>
          import("@/views/Main/Main.vue")
      },
      {
        /* 监控 */
        path: "/Monitor",
        name: "Monitor",
        component: () =>
          import("@/views/Monitor/Monitor.vue")
      },
      {
        /* 能耗 */
        path: "/EnergyConsumption",
        name: "EnergyConsumption",
        component: () =>
          import("@/views/EnergyConsumption/EnergyConsumption.vue")
      },
      {
        /* 我的 */
        path: "/Mine",
        name: "Mine",
        component: () =>
          import("@/views/Mine/Mine.vue")
      },


    ]
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
];

const router = new VueRouter({
  routes
});

export default router;
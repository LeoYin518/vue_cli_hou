import VueRouter from "vue-router";
import Vue from "vue";
/* 插件 - 安装 */
Vue.use(VueRouter);
import Home from "@/views/Home.vue";

/* 配置路由的本质：就是为组件定义访问路径 */
const routes = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/about",
        component: () => import("@/views/About.vue"),
    }
]

/* /#/ hash 模式 history 模式 */
export default new VueRouter({
    mode: "history",
    routes
});

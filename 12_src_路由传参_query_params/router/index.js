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
        path: "/about/:id/:name",
        name: "About",
        component: () => import("@/views/About.vue"),
    }
];

/* 重写路由的 replace 和 push ，解决控制台报错！ */
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}


/* /#/ hash 模式 history 模式 */
export default new VueRouter({
    mode: "history",
    routes
});

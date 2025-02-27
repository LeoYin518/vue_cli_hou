import router from "@/router";

/* 前置-全局路由守卫：只要切换路由，在真正到达目标路由前，可以进行干扰 */
router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    /* next 是放行的函数，支持路由参数 */
    next();
});

/* 后置-全局路由守卫 */
router.afterEach(() => {
    console.log("后置");
})
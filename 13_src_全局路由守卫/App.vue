<template>
  <div>
    <button @click="goHome">GO HOME</button>
    <button @click="goAbout">GO ABOUT</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  methods: {
    goHome() {
      /* 切换路由时，携带参数，query */
      /* this.$router.forward() 前进 */
      /* this.$router.back() 后退 */
      /* this.$router.go(-1) 前进后退取决于参数 */
      this.$router.push({
        path: "/home",
      });
    },
    goAbout() {
      /* 如果使用了 params 进行 restful 风格传参的话，不能使用 path 跳转,必须使用 name 进行跳转 */
      this.$router.replace({
        name: "About",
      });
    },
  }
}
</script>

<style>

</style>

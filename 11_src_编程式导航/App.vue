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
      /* 得到路由对象 */
      /* 切换路由， replace push */
      /* replace 替换路由，上一次的路由历史就被替换了 */
      /* push 值是追加一个访问历史 */
      this.$router.push({
        path: "/home"
      });
    },
    goAbout() {
      this.$router.replace({
        path: "/about"
      });
    },
  }
}
</script>

<style>

</style>

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
      this.$router.push({
        path: "/home",
        query: {
          id: 9999,
          name: "lucy"
        }
      });
    },
    goAbout() {
      /* 如果使用了 params 进行 restful 风格传参的话，不能使用 path 跳转,必须使用 name 进行跳转 */
      this.$router.replace({
        name: "About",
        params: {
          id: 1001,
          name: "tom"
        }
      });
    },
  }
}
</script>

<style>

</style>

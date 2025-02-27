<script>
export default {
  name: "Home",
  mounted() {
    this.getRouterQueryString();
  },
  methods: {
    getRouterQueryString() {
      /* 获取当前路由对象 */
      console.log(this.$route.query.id);
      console.log(this.$route.query.name);
    },
  }
}
</script>

<template>
  <div>首页</div>
</template>

<style scoped>

</style>
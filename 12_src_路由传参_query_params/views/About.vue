<script>
export default {
  name: "About",
  mounted() {
    this.getRouterParams();
  },
  methods: {
    getRouterParams() {
      /* 获取当前路由对象 */
      console.log(this.$route.params.id);
      console.log(this.$route.params.name);
    },
  }
}
</script>

<template>
  <div>
    关于
  </div>
</template>

<style scoped>

</style>
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "学生组件"
    }
  },
}
</script>

<!-- scoped 样式只对当前组件生效 -->
<style scoped>
h1 {
  color: red;
}
</style>
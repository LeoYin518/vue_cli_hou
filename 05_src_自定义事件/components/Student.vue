<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="parentMethod1">调用父组件的函数1</button>
    <button @click="parentMethod2">调用父组件的函数2</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: {
    title: {
      type: String
    },
    fn: {
      type: Function
    }
  },
  data() {
    return {
      msg: "学生组件"
    }
  },
  methods: {
    parentMethod1() {
      this.fn(999);
    },
    parentMethod2() {
      /* $emit 调用自定义事件 */
      const obj = {
        age: 1,
        name: "tom"
      }
      this.$emit("appMethod", obj);
    },
  }
}
</script>

<!-- scoped 样式只对当前组件生效 -->
<style scoped>
h1 {
  color: red;
}
</style>
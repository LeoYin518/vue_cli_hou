<template>
  <div>
    <h1>{{ msg }}: {{ title }}</h1>
    <button @click="trigger">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  /* props: ["title", "fn"],*/ /* 用来接受父组件绑定过来的数据或函数 */
  props: {
    title: {
      type: String,
      /*default: "没传数据"*/ /* 默认值 */
      /*required: true,*/ /* 指定必传 */
    },
    fn: {
      type: Function
    },
    age: {
      type: Number
    }
  },
  data() {
    return {
      msg: "学生组件"
    }
  },
  methods: {
    trigger() {
      this.fn();
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
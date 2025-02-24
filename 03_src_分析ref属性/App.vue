<template>
  <div class="app">
    <!--  vue 中不推荐使用id，作为代替： ref 属性  -->
    <h1 ref="app">App</h1>
    <!-- ref 在组件上使用，this.$refs.stu 得到的组件对象本身 -->
    <Student ref="stu"></Student>
    <button @click="show1">Click Me 1</button>
    <button @click="show2">Click Me 2</button>
    <hr>
    <h1 id="box">Space</h1>
    <button @click="show3">Click Me 3</button>
  </div>
</template>

<script>
import Student from "@/components/Student.vue";
export default {
  name: "App",
  components: {
    Student
  },
  methods: {
    show3() {
      console.log(document.getElementById("box"));
    },
    show2() {
      console.log(this.$refs.stu);
      console.log(this.$refs.stu.msg);
      this.$refs.stu.fn1();
    },
    show1() {
      /* $refs  */
      console.log(this.$refs.app);
    },
  }
}
</script>

<style>

</style>

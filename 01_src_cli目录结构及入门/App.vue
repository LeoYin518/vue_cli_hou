<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <hr>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
/* 组件导入 */
import School from "@/components/School.vue";
import Student from "@/components/Student.vue";
/* 组件注册 */
export default {
  name: "App",
  components: { /* 组件的注册 */
    School,
    Student
  },
  data() {
    return {
      msg: "App组件"
    }
  },
}
</script>

<style>

</style>

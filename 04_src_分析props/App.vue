<template>
  <div class="app">
    <!--  通过绑定向子组件传值，或者函数  -->
    <Student :age="'123'" :title="title1"></Student>
    <Student :title="title2"></Student>
    <Student></Student>
    <Student :fn="appMethod"></Student>
  </div>
</template>

<script>
import Student from "@/components/Student.vue";
export default {
  name: "App",
  components: {
    Student
  },
  data() {
    return {
      title1: "Space",
      title2: "思倍思",
    }
  },
  methods: {
    appMethod() {
      console.log("666");
    },
  }
}
</script>

<style>

</style>

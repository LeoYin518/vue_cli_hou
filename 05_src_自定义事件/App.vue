<template>
  <div class="app">
    <!-- 利用v-bind 来传递函数和数据 -->
    <Student :title="'Hello'" :fn="appMethod"></Student>
    <!--  自定义事件  -->
    <Student @appMethod="appMethod"></Student>
    <!--  组件上的事件，统统视为自定义事件，默认情况下，不支持原生事件 .native 表明原生js事件  -->
    <Student @click.native="appMethod(777)"></Student>
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

    }
  },
  methods: {
    appMethod(num) {
      console.log(num);
    },
  }
}
</script>

<style>

</style>

<template>
  <div class="todo-header">
    <!--
      keyup   按键抬起
      keydown 按键按下
    -->
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="task" @keyup.enter="addItem"/>
  </div>
</template>

<script>
export default {
  name: "sHeader",
  data() {
    return {
      task: "",
      count: 1,
    }
  },
  methods: {
    addItem() {
      const obj = {
        id: this.count,
        task: this.task
      }
      this.count++;
      this.task = "";
      this.$bus.$emit("addTask", obj);
    },
  }
}
</script>


<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
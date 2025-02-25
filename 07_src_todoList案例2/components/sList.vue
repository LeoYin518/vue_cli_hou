<template>
  <ul class="todo-main">
    <s-item v-for="item in todoList" :item="item" :key="item.id"></s-item>
  </ul>
</template>

<script>
import sItem from "@/components/sItem.vue"
export default {
  name: "sList",
  components: {
    sItem
  },
  mounted() {
    /* $on 是绑定事件 */
    this.$bus.$on("delTask", this.delTask);
    this.$bus.$on("addTask", this.addTask);
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    delTask(delId) {
      this.todoList = this.todoList.filter(item => item.id !== delId);
    },
    addTask(task) {
      this.todoList.push(task);
    },
  }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
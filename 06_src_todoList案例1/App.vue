<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <s-header @addTask="addTask"></s-header>
        <s-list :todoList="todoList"></s-list>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from "@/components/sHeader.vue"
import sList from "@/components/sList.vue"

export default {
  name: "App",
  components: {
    sHeader,
    sList,
  },
  data() {
    return {
      todoList: []
    }
  },
  mounted() {
    this.$bus.$on("delTask", this.delTask);
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

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>

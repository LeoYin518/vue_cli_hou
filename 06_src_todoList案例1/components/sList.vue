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
  props: {
    todoList: {
      type: Array
    }
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
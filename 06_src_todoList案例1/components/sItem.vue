<template>
  <li>
    <label>
      <input type="checkbox"/>
      <span>{{ item.id }} - {{ item.task }}</span>
    </label>
    <button class="btn btn-danger" @click="delItem(item.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "sItem",
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    delItem(delId) {
      if (confirm("确认删除？")) {
        this.$bus.$emit("delTask", delId);
      }
    },
  }
}
</script>


<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
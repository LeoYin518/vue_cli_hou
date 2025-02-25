<script>
export default {
  name: "sMain3",
  data() {
    return {
      dataList: [
        { id: 1001, title: "沈阳" },
        { id: 1002, title: "利物浦" }
      ]
    }
  },
}
</script>

<template>
  <div>
    <ul>
      <li v-for="item in dataList" :key="item.id">
        <slot :row="item"></slot>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
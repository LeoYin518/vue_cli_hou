<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    /* 从 vuex 中获取数据 */
    ...mapGetters(["username"])
  },
  data() {
    return {
      msg: "Home"
    }
  },
  methods: {
    updateVuexData() {
      this.msg = "首页";
      this.$store.dispatch("editName", "lucy")
    },
  }
}
</script>

<template>
  <div>
    <h1>首页:自己的数据 {{ msg }}</h1>
    <hr>
    <h2>Vuex的数据：{{ username }}</h2>
    <button @click="updateVuexData">修改一下</button>
  </div>
</template>

<style scoped>

</style>
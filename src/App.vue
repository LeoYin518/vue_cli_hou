<template>
  <div>
    <!--  插槽  -->
    <s-main-one>
      <template slot="prev">
        <h1>Space - 1</h1>
      </template>
      <template slot="next">
        <h1>Space - 111</h1>
      </template>
    </s-main-one>
    <s-main-one>
      <h5>Space - 2</h5>
    </s-main-one>
    <s-main-one>
      <h3>Space - 3</h3>
    </s-main-one>
    <hr>
    <!--  作用域插槽  -->
    <s-main-four>
      <template slot-scope="scope">
        <div>你好 {{ scope.row.title }}</div>
      </template>
    </s-main-four>
  </div>
</template>

<script>
import sMainOne from "@/components/sMain1.vue"
import sMainFour from "@/components/sMain4.vue"
export default {
  name: "App",
  components: {
    sMainOne,
    sMainFour,
  }
}
</script>

<style>

</style>

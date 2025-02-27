<template>
  <div>
    <el-button type="primary" @click="loadingDone">加载完毕</el-button>
    <el-table :data="dataList" v-loading="loading">
      <el-table-column
          prop="id"
          label="用户ID">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名">
      </el-table-column>
      <el-table-column
          label="性别">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.sex === 0">男</el-tag>
          <el-tag type="danger" v-else>女</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: true,
      dataList: [
        {id: 1001, name: "tom1", sex: 0},
        {id: 1002, name: "tom2", sex: 1},
        {id: 1003, name: "tom3", sex: 1},
        {id: 1004, name: "tom4", sex: 0},
        {id: 1005, name: "tom5", sex: 1},
        {id: 1006, name: "tom6", sex: 0},
        {id: 1007, name: "tom7", sex: 0},
      ]
    }
  },
  methods: {
    loadingDone() {
      this.loading = false;
    },
  }
}
</script>

<style>

</style>

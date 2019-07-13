<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="淘金市场" name="first">
      <HeadBarTable />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import HeadBarTable from "./HeadBarTable.vue"

export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    HeadBarTable
  }
}
</script>

<template>
  <el-tabs v-model="first" type="card" @tab-click="handleClick">
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

    }
  },
  components: {
    HeadBarTable
  }
}
</script>

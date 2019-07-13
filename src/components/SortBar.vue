<template>
  <el-form ref="form" :model="from" label-width="200px" style="margin-left: -120px">
    <el-form-item label="排序方式">
      <el-radio-group v-model="form.sortBy">
        <el-radio label="剩余期限"></el-radio>
        <el-radio label="转让价格"></el-radio>
        <el-radio label="七日年化"></el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        sortBy: ""
      }
    }
  }
}
</script>


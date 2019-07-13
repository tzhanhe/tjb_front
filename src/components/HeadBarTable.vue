<template>
  <el-form ref="form" :model="from" label-width="200px" style="margin-left: -120px">
    <el-form-item label="剩余期限">
      <el-radio-group v-model="form.remainingDay">
        <el-radio label="不限"></el-radio>
        <el-radio label="3个月以下"></el-radio>
        <el-radio label="3-6个月"></el-radio>
        <el-radio label="6-12个月"></el-radio>
        <el-radio label="12个月以上"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="转让价格">
      <el-radio-group v-model="form.price">
        <el-radio label="不限"></el-radio>
        <el-radio label="3个月以下"></el-radio>
        <el-radio label="3-6个月"></el-radio>
        <el-radio label="6-12个月"></el-radio>
        <el-radio label="12个月以上"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="七日年化">
      <el-radio-group v-model="form.QiRiAnnu">
        <el-radio label="不限"></el-radio>
        <el-radio label="3个月以下"></el-radio>
        <el-radio label="3-6个月"></el-radio>
        <el-radio label="6-12个月"></el-radio>
        <el-radio label="12个月以上"></el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        remainingDay: "",
        price: "",
        QiRiAnnu: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
  
<template>
  <el-card style="width:550; height:600;">
    <p slot="title">
      {{product.proname}}
    </p>
    <div class="product-card">
      <span class="product-rate">{{product.prorate}}</span>
      <span style="font-size:10px; color: #808695">七日年化</span>
      <br />
      {{product.prodesc}}
      <br />
      金额：{{product.saleamt}} Yuan
      <br />
      <p>失效日期: {{product.invaliddate}}</p>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["product"],
  components: {
  }
};
</script>

<style>
.product-rate {
  color: #F9A704;
  font-size: 20px;
}
</style>


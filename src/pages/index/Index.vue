<template>
  <div>
    <HeadBar />
    <el-divider></el-divider>
    <SortBar />
    <el-divider></el-divider>
    <ProductShowBoard />
  </div>
</template>

<script>
import ProductShowBoard from '../../components/ProductShowBoard.vue';
import HeadBar from "../../components/HeadBar.vue";
import SortBar from "../../components/SortBar.vue";
export default {
  data() {},
  components: {
    HeadBar,
    SortBar,
    ProductShowBoard
  }
};
</script>


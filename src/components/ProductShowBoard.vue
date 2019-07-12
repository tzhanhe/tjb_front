<template>
  <div>
    <div> &nbsp;</div>
    <Waterfall :line-gap="200" :watch="productList" align="center">
      <waterfallSlot
        v-for="product in productList"
        :width="550"
        :height="600"
        :key="product.prono"
      >
      <ProductCard :product="product"></ProductCard>
      </waterfallSlot>
    </Waterfall>
  </div>
</template>
<script>
import Waterfall from "vue-waterfall/lib/waterfall"
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot"
import ProductCard from "./ProductCard.vue"

import Axios from "axios"

export default {
  data() {
    return {
      productList: [
        {
          prono: 1,
          proname: "理财产品 1",
          prodesc: "4.9",
          prorate: "3.00%",
          saleamt: "30000",
          invaliddate: "10/23",
          expiredate: "10/1",
          fsflwno: "123"
        },
        {
          prono: 1,
          proname: "理财产品 1",
          prodesc: "4.9",
          prorate: "3.00%",
          saleamt: "30000",
          invaliddate: "10/23",
          expiredate: "10/1",
          fsflwno: "123"
        }
      ]
    };
  },
  components: {
    Waterfall,
    WaterfallSlot,
    ProductCard
  },
  methods: {},
  mounted: function () {
      Axios.get('http://localhost:8099/recommendedProducts')
        .then(({data}) => {
            console.log(data)
            this.productList = data
        })
        .catch((err) => {
            console.log(err)
        })
  }
};
</script>

<style>
</style>

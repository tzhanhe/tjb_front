<template>
  <div>
    <Waterfall :line-gap="200" :watch="productList" align="center">
      <waterfallSlot
        v-for="item in productList"
        :width="550"
        :height="600"
        :key="item.prono"
      >
        <Card style="width:550; height:600;">
          <p slot="title">
            <Icon type="md-cash" size="24" color="#ff9900"></Icon>
            {{item.proname}}
          </p>
          <div class="product-card">
           <span class="product-rate">{{item.prorate}}</span> <span style="font-size:10px; color: #808695"> 七日年化</span>
           <br/>
           {{item.prodesc}}
            <br/>
            金额：{{item.saleamt}} Yuan
            <br/>
            <p>失效日期: {{item.invaliddate}}</p>
          </div>
        </Card>
      </waterfallSlot>
    </Waterfall>
  </div>
</template>
<script>
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
import Axios from "axios"

export default {
  data() {
    return {
      productList: [
        {
          prono: 1,
          proname: "理财产品 1",
          prodesc: "4.9",
          prorate: "",
          saleamt: "",
          invaliddate: "",
          expiredate: "",
          fsflwno: ""

        }
      ]
    };
  },
  components: {
    Waterfall,
    WaterfallSlot
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
.product-rate {
  text-emphasis: em;
  color: #F9A704;
  font-size: 20px;
}
</style>

<template>
  <div>
    <Waterfall :line-gap="200" :watch="productList" align="center">
      <waterfallSlot
        v-for="item in productList"
        :width="550"
        :height="400"
        :key="item.productID"
      >
        <Card style="width:100%">
          <p slot="title">
            <Icon type="md-cash" size="24"></Icon>
            {{item.productName}}
          </p>
        </Card>
      </waterfallSlot>
    </Waterfall>
  </div>
</template>
<script>
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";

export default {
  data() {
    return {
      productList: [
        {
          productID: 1,
          productName: "理财产品 1"
        },
        {
          productID: 2,
          productName: "理财产品 2"
        }
      ]
    };
  },
  components: {
    Waterfall,
    WaterfallSlot
  },
  methods: {}
};
</script>

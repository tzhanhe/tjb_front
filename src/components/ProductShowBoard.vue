<template>
  <div>
    <Card v-for="item in productList" v-bind:key="item.productID" style="width:350px">
      <p slot="title">
        <Icon type="md-cash" size=24 ></Icon> {{item.productName}}
      </p>
    </Card>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                productList: [{
                    productID: 1,
                    productName: "理财产品 1"
                }]
            }
        },
        methods: {
        }
    }
</script>

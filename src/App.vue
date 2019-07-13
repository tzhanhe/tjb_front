<template>
  <div id="app">
      <Menu />
      <HeadBar />
      <ProductShowBoard />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import ProductShowBoard from "./components/ProductShowBoard.vue";
import HeadBar from "./components/HeadBar.vue"

export default {
  name: "app",
  components: {
    Menu,
    ProductShowBoard,
    HeadBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 8px;
}
</style>

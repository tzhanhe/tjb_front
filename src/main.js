import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Routes from "./Routes"
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.use(ElementUI)
Vue.use(VueRouter);

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

new Vue({
  el: "#app",
  router,
  render: h=>h(App)
})

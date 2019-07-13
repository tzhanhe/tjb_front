<template>
  <div class="block">
    <LoginForm style="z-index: 1000;"/>
    <el-carousel height="600px" style="z-index: 1;">
      <el-carousel-item v-for="{url} in urls" :key="url">
        <el-image :src="url" style="width: 100%; height: 600px;" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import LoginForm from '../../components/LoginForm.vue'

export default {
  data () {
    return {
      urls: [
        {url: require('../../assets/city1.jpg')},
        {url: require('../../assets/city2.jpg')},
        {url: require('../../assets/city3.jpg')}
      ]
    }
  },
  components: {
    LoginForm
  }
}
</script>


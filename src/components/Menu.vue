<template>
  <div>
    <el-menu mode="horizontal" default-active="1">
      <Row>
        <el-col span="8">
          <router-link to="/">
            <el-menu-item name="1">
              <img src="../assets/czbanklogo.jpg" width="180px" style="margin-top: 0px" />
            </el-menu-item>
          </router-link>
        </el-col>
        <el-col span="8">
          <el-input
            hidden-sm-and-down
            suffix-icon="el-icon-search"
            placeholder="搜索"
            style="margin-top: 9px;"
          />
        </el-col>
        <el-col span="8" style="align: left;">
          <el-submenu name="2">
            <template slot="title">
              <Icon type="el-icon-home" size="24" />个人中心
            </template>
            <el-menu-item-group>
              <template slot="title">我</template>
              <el-menu-item index="2-1">我的资料</el-menu-item>
              <el-menu-item index="2-2">查看我的理财</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">消息</template>
              <el-menu-item index="2-1">系统消息</el-menu-item>
              <el-menu-item index="2-2">交易消息</el-menu-item>
              <el-menu-item index="2-3">用户消息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-col>
      </Row>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <Menu mode="horizontal" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-cart" size="24" />
            淘金市场
        </MenuItem>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-home" size="24"/>
                个人中心
            </template>
            <MenuGroup title="我">
                <MenuItem name="2-1">我的资料</MenuItem>
                <MenuItem name="2-2">查看我的理财</MenuItem>
            </MenuGroup>
            <MenuGroup title="消息">
                <MenuItem name="2-1">系统消息</MenuItem>
                <MenuItem name="2-2">交易消息</MenuItem>
                <MenuItem name="2-3">用户消息</MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
</template>

<script>
export default {
}
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

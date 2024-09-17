<template>
  <a-layout class="full-screen-app">
    <a-layout-header>
      <Logo size="50px" style="margin: 7px 20px 0 0"/>
      <Menu></Menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 20px">
      <div :style="{ background: '#fff', padding: '24px', height: '100%' }">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center"> xxxxxxx </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "App",
  setup() {
    document.getElementById("loadingPage").remove();
  },
};
</script>
<style lang="less" scoped>
.full-screen-app {
  height: 100vh;
  .ant-layout-header {
    background: #001529;
    display: flex;
    padding-left: 50px
  }
  .ant-layout-footer{
    padding: 10px 50px;
  }
}
</style>

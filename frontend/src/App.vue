<template>
  <a-layout class="layout">
    <a-layout-header>
      <!-- 图标 -->
      <div class="logo" />
      <Menu></Menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 20px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">Content</div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "App",
  setup() {
    document.getElementById("loadingPage").remove();
    const contentStyle = {
      textAlign: "center",
      minHeight: 120,
      lineHeight: "120px",
      color: "#fff",
      backgroundColor: "#108ee9",
    };
    const siderStyle = {
      textAlign: "center",
      lineHeight: "120px",
      color: "#fff",
      backgroundColor: "#3ba0e9",
    };
    const footerStyle = {
      textAlign: "center",
      color: "#fff",
      backgroundColor: "#7dbcea",
    };
  },
};
</script>
<style lang="less"></style>

<template>
  <a-menu
    v-model:selectedKeys="selectedMenu"
    mode="horizontal"
    :items="menuItems"
    :theme="theme"
    @click="handleMenuClick"
  />
</template>
<script setup>
import { h, ref } from "vue";
import { useRouter } from 'vue-router';
import {
  DashboardOutlined,
  InsertRowAboveOutlined,
} from "@ant-design/icons-vue";

const router = useRouter();

const theme = ref("dark");
const selectedMenu = ref(["home"]);
const menuItems = ref([
  {
    key: "home",
    icon: () => h(DashboardOutlined),
    label: "电流",
    title: "home",
  },
  {
    key: "history",
    icon: () => h(InsertRowAboveOutlined),
    label: "历史数据",
    title: "history",
  },
]);

function handleMenuClick({ key }) {
  router.push("/" + key); // 路由跳转
}
</script>

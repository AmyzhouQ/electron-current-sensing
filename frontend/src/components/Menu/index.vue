<template>
  <a-menu v-model:selectedKeys="selectedMenu" mode="horizontal" :items="menuItems" />
</template>
<script setup>
import { h, ref } from "vue";
import {
  DashboardOutlined,
  InsertRowAboveOutlined,
} from "@ant-design/icons-vue";
const selectedMenu = ref(["electricity"]);
const menuItems = ref([
  {
    key: "electricity",
    icon: () => h(DashboardOutlined),
    label: "电流",
    title: "electricity",
  },
  {
    key: "history",
    icon: () => h(InsertRowAboveOutlined),
    label: "历史数据",
    title: "history",
  },
]);
</script>

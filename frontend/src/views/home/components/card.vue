<template>
  <div :class="['card', statusClass]">
    <div class="card-header">
      <span class="card-title">{{ props.card.address }}</span>
      <!-- 右上角三个点菜单 -->
      <div class="dropdown">
        <!-- <button @click="toggleDropdown" class="menu-button">⋮</button> -->
        <!-- 下拉菜单，hover显示 -->
        <!-- <div v-if="isDropdownVisible" class="dropdown-menu">
          <button @click="editItem">编辑</button>
          <button @click="deleteItem">删除</button>
        </div> -->
        <a-dropdown v-model:open="visible">
          <a class="ant-dropdown-link" @click.prevent>
            <HolderOutlined />
          </a>
          <template #overlay>
            <a-menu @click="handleMenuClick">
              <a-menu-item key="1">编辑</a-menu-item>
              <a-menu-item key="2">删除</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
    <div class="card-body">
      <div class="card-battery">
        <span>{{ props.card.battery }}A</span>
      </div>
      <div class="card-battery card-status">
        <span>{{ status }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {HolderOutlined} from "@ant-design/icons-vue";
const props = defineProps({
  card: Object,
});

const statusClass = computed(() => {
  return props.card.battery > 50 ? "card-ok" : "card-nc";
});
const status = computed(() => {
  return props.card.battery > 50 ? "OK" : "NC";
});
const visible = ref(false);

const handleMenuClick = e => {
    if(e.key === "1"){
        editItem()
    }else{
        deleteItem()
    }
};

// 下拉菜单的操作
const editItem = () => {
  alert("编辑");
};

const deleteItem = () => {
  alert("删除");
};
</script>

<style lang="less" scoped>
@base-bg-color: #f9f9f9;
@ok-bg-color: #e0f7fa;
@nc-bg-color: #ffebee;
@ok-font-color: #00796b;
@nc-font-color: #c62828;
@shadow-color: rgba(0, 0, 0, 0.1);
@border-radius: 10px;
@font-size-large: 32px;
@font-weight-bold: bold;

.card {
  position: relative;
  background-color: @base-bg-color;
  padding: 20px;
  border-radius: @border-radius;
  width: 250px;
  box-shadow: 0 4px 10px @shadow-color;
  transition: background-color 0.3s ease;

  &-ok {
    background-color: @ok-bg-color;

    .card-battery {
      color: @ok-font-color !important;
    }
  }

  &-nc {
    background-color: @nc-bg-color;

    .card-battery {
      color: @nc-font-color !important;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .card-title {
      font-size: 14px;
    }

    .menu-button {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #333;
      padding: 0;
    }
  }

  .dropdown {
    position: relative;

    &-menu {
      position: absolute;
      top: 25px;
      right: 0;
      background-color: #fff;
      border: 1px solid #ccc;
      box-shadow: 0 4px 8px @shadow-color;
      border-radius: 4px;
      display: flex;
      flex-direction: column;

      button {
        padding: 10px 20px;
        background: none;
        border: none;
        width: 100%;
        text-align: left;
        cursor: pointer;

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }

  .card-body {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card-battery {
      font-size: @font-size-large;
      font-weight: @font-weight-bold;
      color: #333;
    }
    .card-status {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}
</style>

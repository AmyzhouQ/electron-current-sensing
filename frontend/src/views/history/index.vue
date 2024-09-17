<template>
  <div class="history-container">
    <div class="history-search">
        <a-form
    layout="inline"
    :model="historySearchForm"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item label="设备名">
      <a-input v-model:value="historySearchForm.deviceName" placeholder="请输入" />
    </a-form-item>
    <a-form-item label="地址号">
      <a-input v-model:value="historySearchForm.address" placeholder="请输入" />
    </a-form-item>
    <a-form-item label="时间">
        <a-range-picker v-model:value="historySearchForm.time" />
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit">
        查询
      </a-button>
    </a-form-item>
  </a-form>
    </div>
    <a-table :dataSource="batteryList" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'battery'">
          {{ record.battery }} A
        </template>
        <template v-if="column.key === 'status'">
          <a-tag :color="getTagColor(record.battery)">{{
            getStatus(record.battery)
          }}</a-tag>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
let historySearchForm = ref({
    
})
let batteryList = ref([
  {
    address: "12312312312312312312",
    battery: 100,
    id: 1,
    status: "OK",
    time: "2022-11-11 11:11:11",
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 50,
    id: 2,
    status: "NC",
    time: "2022-11-11 11:11:11",
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 80,
    id: 3,
    status: "NC",
    time: "2022-11-11 11:11:11",
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 20,
    id: 4,
    status: "OK",
    time: "2022-11-11 11:11:11",
  },
]);
let columns = ref([
  {
    title: "地址号",
    key: "address",
    dataIndex: "address",
  },
  {
    title: "电流",
    key: "battery",
    dataIndex: "battery",
  },
  {
    title: "状态",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "时间",
    key: "time",
    dataIndex: "time",
  },
]);
const getTagColor = (battery) => {
  return battery > 50 ? "green" : "red";
};
const getStatus = (battery) => {
  return battery > 50 ? "OK" : "CN";
};
</script>

<style lang="less" scoped>
.history-search{
    height: 60px;
}
</style>

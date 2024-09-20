<template>
  <div class="history-container">
    <div class="history-search">
        <a-form
    layout="inline"
    :model="historySearchForm"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item label="设备名称">
      <a-input v-model:value="historySearchForm.deviceName" placeholder="请输入" />
    </a-form-item>
    <a-form-item label="设备状态">
      <a-switch v-model:checked="historySearchForm.status" checked-children="ON" un-checked-children="OFF" />
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit">
        查询
      </a-button>
      <a-button type="primary" @click="showModal" style="margin: 0 20px">新增设备</a-button>
    </a-form-item>
  </a-form>
    </div>
    <a-table :dataSource="deviceList" :columns="columns">
        <template v-if="column.key === 'status'">
          <a-tag :color="getTagColor(record.status)">{{
            getStatus(record.status)
          }}</a-tag>
        </template>
    </a-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
let historySearchForm = ref({
  deviceName: "",
  status: "",
})
let deviceList = ref([
  {
    deviceName: "设备1",
    deviceId: "1",
    status: "OK"
  },
]);
let columns = ref([
  {
    title: "设备名称",
    key: "deviceName",
    dataIndex: "deviceName",
  },
  {
    title: "设备id",
    key: "deviceId",
    dataIndex: "deviceId",
  },
  {
    title: "状态",
    key: "status",
    dataIndex: "status",
  }
]);
const getTagColor = (status) => {
  return status === 1 ? "green" : "red";
};
const getStatus = (battery) => {
  return status === 50 ? "OFF" : "ON";
};
</script>

<style lang="less" scoped>
.history-search{
    height: 60px;
}
</style>

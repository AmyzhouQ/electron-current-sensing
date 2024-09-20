<template>
  <div class="home-container">
    <a-empty v-if="cards.length === 0" />
    <div class="home-cards">
      <Card v-for="(item, index) in cards" :key="index" :card="item" />
    </div>
    <a-modal
      v-model:open="isModalVisible"
      title="添加信息"
      @ok="handleSubmit"
      @cancel="handleCancel"
    >
      <a-form
        :model="batteryInfoForm"
        :rules="batteryInfoFormRules"
        ref="formRef"
        label-col="{ span: 6 }"
        wrapper-col="{ span: 18 }"
      >
        <a-form-item ref="address" label="地址" name="address">
          <a-input placeholder="请输入地址" v-model:value="batteryInfoForm.address" />
        </a-form-item>
        <a-form-item ref="battery" label="电量" name="battery">
          <a-input-number :min="0" :max="100" placeholder="请输入电量" style="width: 100%" />
        </a-form-item>
      </a-form>
    </a-modal>

  </div>
</template>

<script setup>
import { QuestionCircleOutlined } from "@ant-design/icons-vue";
import { reactive, ref } from "vue";
import Card from "./components/card.vue";
let cards = ref([
  {
    address: "12312312312312312312",
    battery: 100,
    id: 1,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 50,
    id: 2,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 80,
    id: 3,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 20,
    id: 4,
  },
  {
    address: "12312312312312312312",
    battery: 100,
    id: 5,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 50,
    id: 6,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 80,
    id: 7,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 20,
    id: 8,
  },
  {
    address: "12312312312312312312",
    battery: 100,
    id: 9,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 50,
    id: 10,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 80,
    id: 11,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 20,
    id: 12,
  },
  {
    address: "12312312312312312312",
    battery: 100,
    id: 13,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 50,
    id: 14,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 80,
    id: 15,
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 20,
    id: 16,
  },
]);
const formRef = ref();
const batteryInfoForm = reactive({
  address: "",
  battery: 0,
})
const setParams = () => {
  console.log("setParams");
};

// 表单数据
const form = ref({
  address: '',
  battery: null,
});

// 表单验证规则
const batteryInfoFormRules = {
  address: [
    { required: true, message: '地址不能为空', trigger: 'blur' },
    { min: 3, message: '地址长度至少为 3 个字符', trigger: 'blur' }
  ],
  battery: [
    { required: true, message: '电量不能为空', trigger: 'blur' },
    { type: 'number', min: 0, max: 100, message: '电量必须在 0 到 100 之间', trigger: 'blur' }
  ],
};

// 控制对话框显示状态
const isModalVisible = ref(false);

// 显示对话框
const showModal = () => {
  isModalVisible.value = true;
};

// 关闭对话框
const handleCancel = () => {
  isModalVisible.value = false;
};
const resetForm = () => {
  formRef.value.resetFields();
};
const handleSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
    })
    .catch(() => {
      console.log('error', error);
    });
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  .home-header {
    display: flex;
    justify-content: flex-end;
    height: 50px;
    .btn{
      margin-left: 20px;
    }
  }
  .home-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    overflow: scroll;
    height: calc(100% - 50px)
  }
}
</style>

<template>
  <div class="home-container">
    <a-empty v-if="cards.length === 0"/>
    <Card v-else v-for="(item, index) in cards" :key="index" :card="item" />    
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "./components/card.vue";
let cards = ref([
  {
    address: "12312312312312312312",
    battery: 100,
    id: 1
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 50,
    id: 2
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 80,
    id: 3
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 20,
    id: 4
  },
  {
    address: "12312312312312312312",
    battery: 100,
    id: 5
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 50,
    id: 6
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 80,
    id: 7
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 20,
    id: 8
  },
  {
    address: "12312312312312312312",
    battery: 100,
    id: 9
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 50,
    id: 10
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 80,
    id: 11
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 20,
    id: 12
  },
  {
    address: "12312312312312312312",
    battery: 100,
    id: 13
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 50,
    id: 14
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 80,
    id: 15
  },
  {
    address: "12dfsdfsafdsafafaaffdsafda",
    battery: 20,
    id: 16
  }
])
</script>

<style lang="less" scoped>
.home-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow: scroll;
  height: 100%;
}
</style>

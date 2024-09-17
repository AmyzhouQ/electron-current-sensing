<template>
    <div :style="logoStyle" class="logo" />
  </template>
  
  <script setup>
  import { computed, defineProps } from 'vue';
  
  const props = defineProps({
    size: {
      type: [String, Number],
      default: '100px',
    },
  });
  
  // 计算 Logo 样式
  const logoStyle = computed(() => ({
    width: props.size,
    height: props.size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'url(./src/assets/logo.png) no-repeat',
    backgroundSize: '100% 100%'
  }));
  </script>
  
  <style scoped>
  .logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  </style>
  
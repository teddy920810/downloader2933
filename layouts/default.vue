<template>
  <div class="min-h-screen flex flex-col">
    <!-- 头部组件 -->
    <TheHeader />
    
    <!-- 页面内容 -->
    <main class="flex-grow">
      <slot />
    </main>
    
    <!-- 底部组件 -->
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
</script>
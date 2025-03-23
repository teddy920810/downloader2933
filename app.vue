<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* 添加平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 确保页面内容不会被固定导航栏遮挡 */
main {
  padding-top: 64px; /* 导航栏高度 */
}
</style>

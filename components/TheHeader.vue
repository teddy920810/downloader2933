<template>
  <header class="bg-white shadow fixed w-full top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-red-600">Getvio</NuxtLink>
         
        <!-- 桌面端导航 -->
        <!--<div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink>
          <NuxtLink to="/articles" class="hover:text-red-600">Articles</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-red-600">Contact</NuxtLink>
        </div> -->

        <!-- 桌面端按钮 -->
        <!--<div class="flex items-center space-x-4">
          <el-button type="danger">Start Free Trial</el-button>
          <el-button>Login</el-button>
        </div> -->

        <!-- 移动端菜单按钮 -->
        <!-- <div class="md:hidden">
          <el-button @click="isMenuOpen = !isMenuOpen">
            <el-icon><Menu /></el-icon>
          </el-button>
        </div> -->
      </div>

      <!-- 移动端菜单 -->
      <!--<div v-show="isMenuOpen" class="md:hidden mt-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink>
          <NuxtLink to="/articles" class="hover:text-red-600">Articles</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-red-600">Contact</NuxtLink>
          <div class="flex flex-col space-y-2">
            <el-button type="danger" class="w-full">Start Free Trial</el-button>
            <el-button class="w-full">Login</el-button>
          </div>
        </div>
      </div> -->
    </nav>
  </header>
</template>

<script setup>
import { Menu } from '@element-plus/icons-vue'
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script> 
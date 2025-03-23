<template>
  <div class="min-h-screen">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-2xl font-bold">Logo</NuxtLink>
          <div class="space-x-4">
            <NuxtLink to="/" class="hover:text-blue-600">首页</NuxtLink>
            <NuxtLink to="/products" class="hover:text-blue-600">产品</NuxtLink>
            <NuxtLink to="/articles" class="hover:text-blue-600">文章</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-blue-600">联系我们</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">联系我们</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 联系信息 -->
        <div class="bg-white p-8 rounded-lg shadow">
          <h2 class="text-2xl font-semibold mb-6">联系方式</h2>
          <div class="space-y-4">
            <div class="flex items-start">
              <el-icon class="text-blue-600 mr-3 mt-1"><Location /></el-icon>
              <div>
                <h3 class="font-semibold">公司地址</h3>
                <p class="text-gray-600">某某市某某区某某街道123号</p>
              </div>
            </div>
            <div class="flex items-start">
              <el-icon class="text-blue-600 mr-3 mt-1"><Phone /></el-icon>
              <div>
                <h3 class="font-semibold">联系电话</h3>
                <p class="text-gray-600">123-456-789</p>
              </div>
            </div>
            <div class="flex items-start">
              <el-icon class="text-blue-600 mr-3 mt-1"><Message /></el-icon>
              <div>
                <h3 class="font-semibold">电子邮箱</h3>
                <p class="text-gray-600">info@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 联系表单 -->
        <div class="bg-white p-8 rounded-lg shadow">
          <h2 class="text-2xl font-semibold mb-6">发送消息</h2>
          <el-form :model="form" :rules="rules" ref="formRef" label-width="80px">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name" placeholder="请输入您的姓名" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email" placeholder="请输入您的邮箱" />
            </el-form-item>
            <el-form-item label="主题" prop="subject">
              <el-input v-model="form.subject" placeholder="请输入消息主题" />
            </el-form-item>
            <el-form-item label="消息" prop="message">
              <el-input
                v-model="form.message"
                type="textarea"
                :rows="4"
                placeholder="请输入您的消息"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">发送消息</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <!-- 地图 -->
      <div class="mt-12">
        <h2 class="text-2xl font-semibold mb-6">公司位置</h2>
        <div class="bg-white p-4 rounded-lg shadow">
          <div class="aspect-w-16 aspect-h-9">
            <!-- 这里可以集成地图组件，如高德地图、百度地图等 -->
            <div class="bg-gray-200 w-full h-64 flex items-center justify-center">
              地图占位符
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-gray-800 text-white mt-12">
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">关于我们</h3>
            <p class="text-gray-300">公司简介和联系方式</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">快速链接</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/products" class="text-gray-300 hover:text-white">产品</NuxtLink></li>
              <li><NuxtLink to="/articles" class="text-gray-300 hover:text-white">文章</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-300 hover:text-white">联系我们</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">联系方式</h3>
            <ul class="space-y-2 text-gray-300">
              <li>电话：123-456-789</li>
              <li>邮箱：info@example.com</li>
              <li>地址：某某市某某区</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">关注我们</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-white">微信</a>
              <a href="#" class="text-gray-300 hover:text-white">微博</a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 您的公司名称. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Location, Phone, Message } from '@element-plus/icons-vue'

const formRef = ref(null)
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ],
  subject: [
    { required: true, message: '请输入主题', trigger: 'blur' },
    { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
  ],
  message: [
    { required: true, message: '请输入消息内容', trigger: 'blur' },
    { min: 10, max: 500, message: '长度在 10 到 500 个字符', trigger: 'blur' }
  ]
}

const submitForm = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate((valid) => {
    if (valid) {
      // 这里添加表单提交逻辑
      console.log('表单数据：', form.value)
      ElMessage.success('消息发送成功！')
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  })
}

// SEO 优化
useHead({
  title: '联系我们 - 我的 SEO 网站',
  meta: [
    {
      name: 'description',
      content: '联系我们，获取更多产品信息和服务支持。'
    },
    {
      name: 'keywords',
      content: '联系我们,联系方式,公司地址,在线留言'
    }
  ]
})
</script> 
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
      <h1 class="text-4xl font-bold mb-8">我们的产品</h1>
      
      <!-- 产品筛选 -->
      <div class="mb-8">
        <el-select v-model="selectedCategory" placeholder="选择产品类别" class="w-64">
          <el-option
            v-for="category in categories"
            :key="category.value"
            :label="category.label"
            :value="category.value"
          />
        </el-select>
      </div>

      <!-- 产品列表 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="product in filteredProducts" :key="product.id" class="bg-white rounded-lg shadow overflow-hidden">
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-blue-600">¥{{ product.price }}</span>
              <el-button type="primary">了解更多</el-button>
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
const selectedCategory = ref('')
const categories = ref([
  { label: '全部产品', value: '' },
  { label: '类别一', value: 'category1' },
  { label: '类别二', value: 'category2' },
  { label: '类别三', value: 'category3' }
])

// 模拟产品数据，实际项目中应该从API获取
const products = ref([
  {
    id: 1,
    name: '产品一',
    description: '这是产品一的详细描述',
    price: 999,
    image: '/images/product1.jpg',
    category: 'category1'
  },
  {
    id: 2,
    name: '产品二',
    description: '这是产品二的详细描述',
    price: 1999,
    image: '/images/product2.jpg',
    category: 'category2'
  },
  // 更多产品...
])

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products.value
  return products.value.filter(product => product.category === selectedCategory.value)
})

// SEO 优化
useHead({
  title: '产品列表 - 我的 SEO 网站',
  meta: [
    {
      name: 'description',
      content: '浏览我们的产品系列，发现优质的产品和服务。'
    },
    {
      name: 'keywords',
      content: '产品列表,产品展示,产品分类,公司产品'
    }
  ]
})
</script> 
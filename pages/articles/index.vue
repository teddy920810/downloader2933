<template>
  <div class="min-h-screen">
    
    <main class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">最新文章</h1>
      
      <!-- 文章列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article v-for="article in articles" :key="article.id" class="bg-white rounded-lg shadow overflow-hidden">
          <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <span>{{ article.date }}</span>
              <span class="mx-2">·</span>
              <span>{{ article.category }}</span>
            </div>
            <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
            <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
            <NuxtLink :to="`/articles/${article.id}`" class="text-blue-600 hover:text-blue-800">
              阅读更多 →
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- 分页 -->
      <div class="mt-8 flex justify-center">
        <el-pagination
          v-model:current-page="currentPage"
          :page-size="10"
          :total="total"
          layout="prev, pager, next"
        />
      </div>
    </main>

  
  </div>
</template>

<script setup>
const currentPage = ref(1)
const total = ref(100)

// 模拟文章数据，实际项目中应该从API获取
const articles = ref([
  {
    id: 1,
    title: '如何选择合适的产品',
    excerpt: '本文将为您介绍如何根据自身需求选择最适合的产品...',
    date: '2024-03-22',
    category: '产品指南',
    image: '/images/article1.jpg'
  },
  {
    id: 2,
    title: '行业发展趋势分析',
    excerpt: '深入分析当前行业的发展趋势和未来展望...',
    date: '2024-03-21',
    category: '行业动态',
    image: '/images/article2.jpg'
  },
  // 更多文章...
])

// SEO 优化
useHead({
  title: '文章列表 - 我的 SEO 网站',
  meta: [
    {
      name: 'description',
      content: '浏览我们的最新文章，了解行业动态和产品知识。'
    },
    {
      name: 'keywords',
      content: '文章列表,行业动态,产品知识,公司新闻'
    }
  ]
})
</script> 
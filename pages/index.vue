<template>
  <div class="min-h-screen">
    <TheHeader />
    <!-- 主要内容 -->
    <main class="pt-20">
      <!-- Hero 区域 -->
      <section class="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl font-bold mb-6 whitespace-nowrap">Free Video Downloader Online</h1>
            <p class="text-xl text-gray-600 mb-8">One-click to download videos from 1000+ websites for offline use or watch and convert to MP3 or MP4 based on your needs directly online.</p>
            <div class="flex justify-center space-x-4">
              <el-input
                v-model="videoUrl"
                placeholder="Paste YouTube video link"
                class="w-96"
              >
                <template #append>
                  <el-button type="danger" @click="handleDownload" :loading="isLoading">Download</el-button>
                </template>
              </el-input>
            </div>
            <!-- Download Options -->
            <div v-if="downloadOptions.length > 0" class="mt-8">
              <h3 class="text-xl font-semibold mb-4">Select Download Option</h3>
              
              <div class="flex gap-8">
                <!-- 左侧视频信息 -->
                <div class="w-1/3">
                  <div class="bg-white p-4 rounded-lg shadow">
                    <img :src="videoInfo.thumbnail" :alt="videoInfo.title" class="w-full rounded-lg mb-4">
                    <h4 class="text-lg font-medium line-clamp-2">{{ videoInfo.title }}</h4>
                  </div>
                </div>

                <!-- 右侧下载选项 -->
                <div class="w-2/3">
                  <!-- 视频含音频资源 -->
                  <div v-if="videoWithAudioOptions.length > 0" class="mb-8">
                    <h4 class="text-lg font-medium mb-4">Video & Audio</h4>
                    <el-table :data="videoWithAudioOptions" stripe class="w-full">
                      <el-table-column label="Quality" prop="quality" />
                      <el-table-column label="Format" prop="format" />
                      <el-table-column label="Download" width="120">
                        <template #default="{ row }">
                          <el-button type="danger" size="small" @click="downloadVideo(row.url)">
                            Download
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>

                  <!-- 仅视频资源 -->
                  <div v-if="videoOnlyOptions.length > 0" class="mb-8">
                    <h4 class="text-lg font-medium mb-4">Video Only</h4>
                    <el-table :data="videoOnlyOptions" stripe class="w-full">
                      <el-table-column label="Quality" prop="quality" />
                      <el-table-column label="Format" prop="format" />
                      <el-table-column label="Download" width="120">
                        <template #default="{ row }">
                          <el-button type="danger" size="small" @click="downloadVideo(row.url)">
                            Download
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>

                  <!-- 仅音频资源 -->
                  <div v-if="audioOptions.length > 0" class="mb-8">
                    <h4 class="text-lg font-medium mb-4">Audio Only</h4>
                    <el-table :data="audioOptions" stripe class="w-full">
                      <el-table-column label="Quality" prop="quality" />
                      <el-table-column label="Format" prop="format" />
                      <el-table-column label="Download" width="120">
                        <template #default="{ row }">
                          <el-button type="danger" size="small" @click="downloadVideo(row.url)">
                            Download
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mx-auto px-4 py-20">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4">getvio.online Free Video Download Online</h2>
            <p class="text-2xl">
              Supports Downloading Videos from 
              <span class="text-blue-500">1000+</span>
              <span class="text-blue-500">Websites Like:</span>
            </p>
          </div>
          
          <!-- 第一行网站 -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div class="flex items-center justify-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <i class="fab fa-youtube text-white text-2xl"></i>
              </div>
              <span class="font-medium">YouTube</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <i class="fab fa-facebook text-white text-2xl"></i>
              </div>
              <span class="font-medium">Facebook</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
                <i class="fab fa-twitter text-white text-2xl"></i>
              </div>
              <span class="font-medium">Twitter</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <i class="fab fa-instagram text-white text-2xl"></i>
              </div>
              <span class="font-medium">Instagram</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <i class="fab fa-tiktok text-white text-2xl"></i>
              </div>
              <span class="font-medium">TikTok</span>
            </div>
          </div>

          <!-- 第二行网站 -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div class="flex items-center justify-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <i class="fab fa-soundcloud text-white text-2xl"></i>
              </div>
              <span class="font-medium">SoundCloud</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
                <i class="fab fa-vimeo-v text-white text-2xl"></i>
              </div>
              <span class="font-medium">Vimeo</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <img src="~/assets/images/espn.svg" alt="ESPN" class="w-6 h-6">
              </div>
              <span class="font-medium">ESPN</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <img src="~/assets/images/dailymotion.svg" alt="Dailymotion" class="w-6 h-6">
              </div>
              <span class="font-medium">Dailymotion</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <img src="~/assets/images/nbc.svg" alt="NBC" class="w-6 h-6">
              </div>
              <span class="font-medium">NBC</span>
            </div>
          </div>
        </div>
      </section>
      <!-- 特性介绍 -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="text-center">
              <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <el-icon class="text-2xl text-red-600"><VideoCamera /></el-icon>
              </div>
              <h3 class="text-xl font-semibold mb-2">Multiple Resolution Options</h3>
              <p class="text-gray-600">Choose higher resolution for better quality or lower resolution for faster download speed based on your needs.</p>
            </div>
            <div class="text-center">
              <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <el-icon class="text-2xl text-red-600"><Files /></el-icon>
              </div>
              <h3 class="text-xl font-semibold mb-2">Multiple Format Support</h3>
              <p class="text-gray-600">YouTube videos come in various formats like mp4, webm, etc. Choose the format that best suits your needs.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { VideoCamera, Files, Document } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const videoUrl = ref('')
const isLoading = ref(false)
const downloadOptions = ref([])
const videoWithAudioOptions = ref([])
const audioOptions = ref([])
const videoOnlyOptions = ref([])
const videoInfo = ref({
  thumbnail: '',
  title: ''
})

// 获取用户IP地址
const getUserIP = async () => {
  try {
    const response = await fetch('https://pro.ip-api.com/json/?key=Vg0YrUIcljXdA6o', {
      headers: {
        'Referer': 'www.download4.cc'
      }
    })
    const data = await response.json()
    return data.countryCode || 'HK' // 默认使用香港
  } catch (error) {
    console.error('获取IP地址失败:', error)
    return 'HK' // 出错时默认使用香港
  }
}

// 处理下载按钮点击
const handleDownload = async () => {
  if (!videoUrl.value) {
    ElMessage.warning('Please enter a video link')
    return
  }

  if (!videoUrl.value.includes('youtube.com') && !videoUrl.value.includes('youtu.be')) {
    ElMessage.warning('Please enter a valid YouTube video link')
    return
  }

  isLoading.value = true
  try {
    const country = await getUserIP()
    const response = await fetch(`https://www.download4.cc/media/parse?address=${encodeURIComponent(videoUrl.value)}&country=${country}`)
    const data = await response.json()

    if (data.code === 0 && data.data.formats) {
      // 保存视频信息
      videoInfo.value = {
        thumbnail: data.data.thumbnail,
        title: data.data.title
      }
      
      // 先过滤掉无效的格式
      const validFormats = data.data.formats.filter(format => format.filesize > 0);
      
      // 分类处理
      const videoWithAudio = validFormats.filter(format => 
        format.acodec && format.acodec !== 'none' && 
        format.vcodec && format.vcodec !== 'none'
      );
      
      const audioOnly = validFormats.filter(format => 
        format.acodec && format.acodec !== 'none' && 
        (!format.vcodec || format.vcodec === 'none')
      );
      
      const videoOnly = validFormats.filter(format => 
        format.vcodec && format.vcodec !== 'none' && 
        (!format.acodec || format.acodec === 'none')
      );

      // 处理视频含音频选项
      videoWithAudioOptions.value = videoWithAudio
        .map(format => ({
          quality: format.height ? `${format.height}p` : 'Audio',
          format: format.ext.toUpperCase(),
          url: format.url
        }))
        .sort((a, b) => {
          if (a.ext === 'mp4' && b.ext !== 'mp4') return -1;
          if (a.ext !== 'mp4' && b.ext === 'mp4') return 1;
          return (b.quality === 'Audio' ? 0 : parseInt(b.quality)) - (a.quality === 'Audio' ? 0 : parseInt(a.quality));
        });

      // 处理仅音频选项
      audioOptions.value = audioOnly
        .map(format => ({
          quality: 'Audio',
          format: format.ext.toUpperCase(),
          url: format.url
        }))
        .sort((a, b) => {
          if (a.ext === 'mp4' && b.ext !== 'mp4') return -1;
          if (a.ext !== 'mp4' && b.ext === 'mp4') return 1;
          return 0;
        });

      // 处理仅视频选项
      videoOnlyOptions.value = videoOnly
        .map(format => ({
          quality: format.height ? `${format.height}p` : 'Video',
          format: format.ext.toUpperCase(),
          url: format.url
        }))
        .sort((a, b) => {
          if (a.ext === 'mp4' && b.ext !== 'mp4') return -1;
          if (a.ext !== 'mp4' && b.ext === 'mp4') return 1;
          return (b.quality === 'Video' ? 0 : parseInt(b.quality)) - (a.quality === 'Video' ? 0 : parseInt(a.quality));
        });

      // 保存所有选项
      downloadOptions.value = [...videoWithAudioOptions.value, ...audioOptions.value, ...videoOnlyOptions.value];
    } else {
      ElMessage.error('Failed to get video information')
    }
  } catch (error) {
    console.error('Download failed:', error)
    ElMessage.error('Download failed, please try again later')
  } finally {
    isLoading.value = false
  }
}

// 下载视频
const downloadVideo = (url) => {
  window.open(url, '_blank')
}

// SEO 优化
useHead({
  title: 'YouTube Video Downloader - Download HD Videos with One Click',
  meta: [
    {
      name: 'description',
      content: 'Easily download YouTube videos with multiple resolution and format options, featuring AI transcription to make video content acquisition simpler.'
    },
    {
      name: 'keywords',
      content: 'YouTube downloader, video download, AI transcription, video tools, online download'
    }
  ]
})
</script>
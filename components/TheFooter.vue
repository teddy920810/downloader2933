<template>
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">About Us</h3>
          <p class="text-gray-300">We are committed to providing users with the highest quality video download and transcription services.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Tools</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/products" class="text-gray-300 hover:text-white">AI Transcription</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-gray-300 hover:text-white">Video Download</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-gray-300 hover:text-white">Smart Search</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <ul class="space-y-2 text-gray-300">
            <li>Phone: 123-456-789</li>
            <li>Email: support@example.com</li>
            <li>Address: City, Country</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white">WeChat</a>
            <a href="#" class="text-gray-300 hover:text-white">Weibo</a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template> 
<script setup>
</script>
<template>
  <div id="app">
    <nav class="bg-gray-400 flex justify-center items-center w-full">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <!-- utilisez des liens <router-link> pour naviguer entre les itinéraires -->
                <router-link class="text-white px-3 py-2 rounded-md text-sm font-medium" to="/">Todo App</router-link>
                <router-link class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/galleryart">Gallery Art</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- affichez le composant correspondant à l'itinéraire actif -->
    <router-view></router-view>
</div></template>
<style></style>


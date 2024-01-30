<script setup>
</script>
<template>
  <div id="app">
    <nav>
      <!-- utilisez des liens <router-link> pour naviguer entre les itinéraires -->
      <router-link to="/">Todo App</router-link>
      <router-link to="/galleryart">Gallery Art</router-link>
    </nav>
    <!-- affichez le composant correspondant à l'itinéraire actif -->
    <router-view></router-view>
  </div>
</template>
<style></style>


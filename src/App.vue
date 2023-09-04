<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="m-4 max-w-[800px]">
    <Navbar/>
    <RouterView />
  </div>
</template>

<style scoped></style>

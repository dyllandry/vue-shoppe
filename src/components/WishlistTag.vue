<script setup lang="ts">
const show = defineProps<{ show: boolean }>();
</script>

<template>
  <div class="h-[20px]">
    <span v-if="show" class="text-sm bg-amber-400 py-0.5 px-1 rounded">
      Wishlist
    </span>
  </div>
</template>

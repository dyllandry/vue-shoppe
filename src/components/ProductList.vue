<script setup lang="ts">
import { useProductStore } from "@/stores/product";
import ProductListItem from "./ProductListItem.vue";

const { products } = useProductStore();
</script>

<template>
  <div class="flex flex-wrap gap-x-4 gap-y-12">
    <ProductListItem
      v-for="product in products"
      :key="product.id"
      :id="product.id"
    />
  </div>
</template>

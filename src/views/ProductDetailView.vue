<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useProductStore } from "@/stores/product";
import AddToCart from "@/components/AddToCart.vue";
import AddToWishlist from "@/components/AddToWishlist.vue";

const route = useRoute();
const { getProductById } = useProductStore();

const product = computed(() => {
  const id = parseInt(route.params.id as string);
  return getProductById(id);
});
</script>

<template>
  <div class="flex gap-4">
    <img :src="product.image" />
    <div class="grow">
      <div class="mb-2">
        <div>{{ product.name }}</div>
        <div class="price">${{ product.price }}</div>
        <p>{{ product.description }}</p>
      </div>
      <div class="flex flex-col max-w-[200px] gap-2 text-sm">
        <AddToCart :id="product.id" />
        <AddToWishlist :id="product.id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import { useProductStore } from "@/stores/product";
import AddToCart from "@/components/AddToCart.vue";
import AddToWishlist from "@/components/AddToWishlist.vue";

const route = useRoute();

const productId = parseInt(route.params.id as string);
const productStore = useProductStore();
const product = productStore.getProductById(productId);
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
        <AddToCart :id="productId" />
        <AddToWishlist :id="productId" />
      </div>
    </div>
  </div>
</template>

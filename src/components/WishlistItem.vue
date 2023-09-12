<script setup lang="ts">
import { computed } from "vue";

import { useProductStore } from "@/stores/product";
import { useWishlistStore } from "@/stores/wishlist";
import AddToCart from "./AddToCart.vue";
import AddToWishlist from "./AddToWishlist.vue";

const props = defineProps<{ id: number }>();

const wishlistStore = useWishlistStore();
const { getWishlistItemById } = wishlistStore;
const wishlistItem = computed(() => getWishlistItemById(props.id));

const productStore = useProductStore();
const { getProductById } = productStore;
const product = computed(() => getProductById(wishlistItem.value.productId));
</script>

<template>
  <div class="flex gap-4">
    <img :src="product.image" />
    <div class="flex flex-col gap-2">
      <div>
        <div>{{ product.name }}</div>
        <div class="price">${{ product.price }}</div>
      </div>
      <AddToCart :id="product.id" />
      <AddToWishlist :id="product.id" />
    </div>
  </div>
</template>

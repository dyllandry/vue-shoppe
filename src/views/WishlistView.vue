<script setup lang="ts">
import { storeToRefs } from "pinia";

import WishlistItem from "@/components/WishlistItem.vue";
import { useWishlistStore } from "@/stores/wishlist";

const wishlistStore = useWishlistStore();
const { items: wishlistItems } = storeToRefs(wishlistStore);
</script>

<template>
  <WishlistItem
    v-for="{ id } in wishlistItems"
    :key="id"
    :id="id"
    class="mb-12"
  />
  <div v-if="wishlistItems.length === 0">Your wishlist is empty.</div>
</template>

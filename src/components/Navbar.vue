<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { quantityInCart } = storeToRefs(cartStore);
</script>

<template>
  <div class="flex items-end mt-2 mb-4">
    <div class="text-xl grow-[2]">
      <RouterLink :to="{ name: 'products' }">Vue Shoppe</RouterLink>
    </div>
    <div class="grow">
      <RouterLink :to="{ name: 'products' }">Products</RouterLink>
    </div>
    <div class="grow">
      <RouterLink :to="{ name: 'cart' }">
        <span>Cart</span>
        <span v-if="quantityInCart > 0" class="ml-1">
          ({{ quantityInCart }})
        </span>
      </RouterLink>
    </div>
    <div class="grow">
      <RouterLink :to="{ name: 'products' }">Wishlist</RouterLink>
    </div>
  </div>
</template>

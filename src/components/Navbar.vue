<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useWishlistStore } from "@/stores/wishlist";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { quantityInCart } = storeToRefs(cartStore);

const wishlistStore = useWishlistStore();
const { numItemsInWishlist } = storeToRefs(wishlistStore);
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
      <RouterLink :to="{ name: 'wishlist' }">
        <span>Wishlist</span>
        <span v-if="numItemsInWishlist > 0" class="ml-1"
          >({{ numItemsInWishlist }})</span
        >
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import { useCartStore } from "@/stores/cart";
import { moveFromWishlistToCart } from "@/stores/utility-actions/move-between-cart-and-wishlist";
import { useWishlistStore } from "@/stores/wishlist";

const { id } = defineProps<{ id: number }>();

const wishlistStore = useWishlistStore();
const { findWishlistItemByProductId } = wishlistStore;
const inWishlist = computed(() => findWishlistItemByProductId(id) != null);

const cartStore = useCartStore();
const { addToCart, removeFromCart, findCartItemByProductId } = cartStore;
const inCart = computed(() => findCartItemByProductId(id));

const buttonText = computed(() => {
  if (inWishlist.value) {
    return "Move to Cart";
  }
  if (inCart.value) {
    return "Remove from Cart";
  } else {
    return "Add to Cart";
  }
});

const handleButtonClick = () => {
  if (inWishlist.value) {
    moveFromWishlistToCart(id, cartStore, wishlistStore);
  } else {
    if (inCart.value) {
      const cartItem = findCartItemByProductId(id);
      removeFromCart(cartItem!.id);
    } else {
      addToCart(id);
    }
  }
};
</script>

<template>
  <button @click="handleButtonClick" class="text-sm">{{ buttonText }}</button>
</template>

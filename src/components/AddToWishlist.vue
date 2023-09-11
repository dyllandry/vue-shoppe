<script lang="ts" setup>
import { computed } from "vue";

import { useCartStore } from "@/stores/cart";
import { useWishlistStore } from "@/stores/wishlist";
import { moveFromCartToWishlist } from "@/stores/utility-actions/move-between-cart-and-wishlist";

const { id } = defineProps<{ id: number }>();

const cartStore = useCartStore();
const { findCartItemByProductId } = cartStore;
const inCart = computed(() => findCartItemByProductId(id) != null);

const wishlistStore = useWishlistStore();
const { findWishlistItemByProductId, addToWishlist, removeFromWishlist } =
  wishlistStore;
const inWishlist = computed(() => findWishlistItemByProductId(id) != null);

const buttonText = computed(() => {
  if (inCart.value) {
    return "Move to Wishlist";
  } else if (inWishlist.value) {
    return "Remove from Wishlist";
  } else {
    return "Add to Wishlist";
  }
});

const handleButtonPress = () => {
  if (inWishlist.value) {
    const wishlistItem = findWishlistItemByProductId(id);
    removeFromWishlist(wishlistItem!.id);
  } else if (inCart.value) {
    moveFromCartToWishlist(id, cartStore, wishlistStore);
  } else {
    addToWishlist(id);
  }
};
</script>

<template>
  <button @click="handleButtonPress">{{ buttonText }}</button>
</template>

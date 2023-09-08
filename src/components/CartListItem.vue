<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useProductStore } from "@/stores/product";

const { id } = defineProps<{ id: number }>();

const cartStore = useCartStore();
const cartItem = cartStore.getCartItemById(id);
const { removeFromCart } = cartStore;

const productStore = useProductStore();
const product = productStore.getProductById(cartItem.productId);
</script>

<template>
  <div class="flex">
    <img :src="product.image" class="mr-4" />
    <div class="flex flex-col gap-y-2">
      <div>
        <div>{{ product.name }}</div>
        <div class="price">${{ product.price }}</div>
        <div>Qty: {{ cartItem.quantity }}</div>
      </div>
      <div class="flex flex-col gap-y-2">
        <button @click="removeFromCart(id)">Remove from Cart</button>
        <button>Move to Wishlist</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/product";
import { useCartStore } from "@/stores/cart";
import { ExceedMaxCartItemQuantity } from "@/errors/exceed-max-cart-item-quantity";

const { id } = defineProps<{ id: number }>();

const productStore = useProductStore();
const product = productStore.getProductById(id);

const { addToCart } = useCartStore();
function handleAddToCart(productId: number) {
  try {
    addToCart(productId);
  } catch (error) {
    if (error instanceof ExceedMaxCartItemQuantity) {
      // Show toaster popup "You can order at most 5 of any product."
    } else {
      throw error;
    }
  }
}
</script>

<template>
  <div v-if="product != null">
    <RouterLink :to="{ name: 'product', params: { id } }">
      <img :src="product.image" />
    </RouterLink>
    <div class="mt-2 mb-2">
      <RouterLink :to="{ name: 'product', params: { id } }">
        <div>{{ product.name }}</div>
      </RouterLink>
      <RouterLink :to="{ name: 'product', params: { id } }">
        <div class="price">${{ product.price }}</div>
      </RouterLink>
    </div>
    <div class="flex flex-col gap-y-2 text-sm">
      <button @click="handleAddToCart(product.id)">Add to Cart</button>
      <button>Add to Wishlist</button>
    </div>
  </div>
  <div v-if="product == null">Product not found.</div>
</template>

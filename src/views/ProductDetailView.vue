<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useProductStore } from "@/stores/product";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const productId = parseInt(route.params.id as string);
const productStore = useProductStore();
const product = productStore.getProductById(productId);

const cartStore = useCartStore();
const { addToCart, findCartItemByProductId } = cartStore;
const cartItem = computed(() => findCartItemByProductId(productId));
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
        <button @click="addToCart(product.id)">
          <span>Add to Cart</span>
          <span v-if="cartItem != null" class="ml-1"
            >({{ cartItem.quantity }} in cart)</span
          >
        </button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  </div>
</template>

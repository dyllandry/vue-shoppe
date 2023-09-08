<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useProductStore } from "@/stores/product";

const { id } = defineProps<{ id: number }>();

const cartStore = useCartStore();
const cartItem = cartStore.getCartItemById(id);
const { removeFromCart } = cartStore;

function handleChangeQuantity(event: Event) {
  const { value: selectValue } = event.target as HTMLSelectElement;
  const newQuantity = parseInt(selectValue);
  cartStore.changeQuantity(id, newQuantity);
}

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
        <div>
          <span>Qty:</span>
          <select
            class="ml-2"
            :value="cartItem.quantity"
            @change="handleChangeQuantity"
          >
            <option value="0">0 (remove)</option>
            <option v-for="quantity in 5" :value="quantity" :key="quantity">
              {{ quantity }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <button @click="removeFromCart(id)">Remove from Cart</button>
        <button>Move to Wishlist</button>
      </div>
    </div>
  </div>
</template>

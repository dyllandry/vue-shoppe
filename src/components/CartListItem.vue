<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useProductStore } from "@/stores/product";
import AddToCart from "@/components/AddToCart.vue";
import AddToWishlist from "@/components/AddToWishlist.vue";

const { id } = defineProps<{ id: number }>();

const cartStore = useCartStore();
const cartItem = cartStore.getCartItemById(id);

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
    <RouterLink :to="{ name: 'product', params: { id: product.id } }">
      <img :src="product.image" class="mr-4" />
    </RouterLink>
    <div class="flex flex-col gap-y-2">
      <div>
        <RouterLink :to="{ name: 'product', params: { id: product.id } }">
          <div>{{ product.name }}</div>
        </RouterLink>
        <RouterLink :to="{ name: 'product', params: { id: product.id } }">
          <div class="price">${{ product.price }}</div>
        </RouterLink>
        <div class="text-sm">
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
      <div class="flex flex-col gap-y-2 text-sm">
        <AddToCart :id="cartItem.productId" />
        <AddToWishlist :id="cartItem.productId" />
      </div>
    </div>
  </div>
</template>

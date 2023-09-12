<script setup lang="ts">
import { useProductStore } from "@/stores/product";
import AddToCart from "@/components/AddToCart.vue";
import AddToWishlist from "@/components/AddToWishlist.vue";

const { id } = defineProps<{ id: number }>();

const productStore = useProductStore();
const product = productStore.getProductById(id);
</script>

<template>
  <div v-if="product != null">
    <div class="w-[200px] h-[200px]">
      <RouterLink :to="{ name: 'product', params: { id } }">
        <img :src="product.image" />
      </RouterLink>
    </div>
    <div class="mt-2 mb-2">
      <div>
        <RouterLink :to="{ name: 'product', params: { id } }">
          {{ product.name }}
        </RouterLink>
      </div>
      <div class="price">
        <RouterLink :to="{ name: 'product', params: { id } }">
          ${{ product.price }}
        </RouterLink>
      </div>
    </div>
    <div class="flex flex-col gap-y-2 text-sm">
      <AddToCart :id="id" />
      <AddToWishlist :id="id" />
    </div>
  </div>
  <div v-if="product == null">Product not found.</div>
</template>

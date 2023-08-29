<script setup lang="ts">
import { useProductStore } from '@/stores/product';

const { id } = defineProps<{ id: number }>();

const productStore = useProductStore();

const product = productStore.getProductById(id);
</script>

<template>
    <div v-if="product != null">
        <img :src="product.image">
        <div>${{ product.price }}</div>
        <div>{{ product.name }}</div>
        <button :style="{ display: 'block' }">Add to Cart</button>
        <button :style="{ display: 'block' }">Add to Wishlist</button>
    </div>
    <div v-if="product == null">
        Product not found.
    </div>
</template>
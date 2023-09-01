<script setup lang="ts">
import { useProductStore } from '@/stores/product';

const { id } = defineProps<{ id: number }>();

const productStore = useProductStore();

const product = productStore.getProductById(id);
</script>

<template>
    <div v-if="product != null">
        <img :src="product.image">
        <div class="mt-2 mb-2">
            <div>{{ product.name }}</div>
            <div class="text-lg font-bold">${{ product.price }}</div>
        </div>
        <div class="flex flex-col gap-y-2 text-sm">
            <button>Add to Cart</button>
            <button>Add to Wishlist</button>
        </div>
    </div>
    <div v-if="product == null">
        Product not found.
    </div>
</template>